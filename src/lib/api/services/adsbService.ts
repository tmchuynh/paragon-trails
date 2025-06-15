/**
 * ADSB Database API Service
 * Fetches real aircraft, flight route, and airline data
 * API Documentation: https://www.adsbdb.com/?ref=public_apis&utm_medium=website
 */

const ADSB_BASE_URL = "https://api.adsbdb.com/v0";

export interface ADSBAircraft {
  type: string;
  icao_type: string;
  manufacturer: string;
  mode_s: string;
  registration: string;
  registered_owner_country_iso_name: string;
  registered_owner_country_name: string;
  registered_owner_operator_flag_code: string;
  registered_owner: string;
  url_photo: string | null;
  url_photo_thumbnail: string | null;
}

export interface ADSBFlightRoute {
  callsign: string;
  callsign_icao: string;
  callsign_iata: string;
  airline: {
    name: string;
    icao: string;
    iata: string;
    country: string;
    country_iso: string;
    callsign: string;
  };
  origin: {
    country_iso_name: string;
    country_name: string;
    elevation: number;
    iata_code: string;
    icao_code: string;
    latitude: number;
    longitude: number;
    municipality: string;
    name: string;
  };
  destination: {
    country_iso_name: string;
    country_name: string;
    elevation: number;
    iata_code: string;
    icao_code: string;
    latitude: number;
    longitude: number;
    municipality: string;
    name: string;
  };
}

export interface ADSBAirline {
  name: string;
  icao: string;
  iata: string | null;
  country: string;
  country_iso: string;
  callsign: string;
}

class ADSBService {
  private cache = new Map<string, any>();
  private cacheExpiry = 5 * 60 * 1000; // 5 minutes cache

  private async fetchWithCache<T>(
    url: string,
    cacheKey: string
  ): Promise<T | null> {
    // Check cache first
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.data;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Cache the result
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });

      return data;
    } catch (error) {
      console.warn(`ADSB API error for ${url}:`, error);
      return null;
    }
  }

  /**
   * Fetch aircraft data by Mode S or Registration
   */
  async getAircraft(identifier: string): Promise<ADSBAircraft | null> {
    const url = `${ADSB_BASE_URL}/aircraft/${identifier}`;
    const cacheKey = `aircraft_${identifier}`;

    const response = await this.fetchWithCache<any>(url, cacheKey);
    return response?.response?.aircraft || null;
  }

  /**
   * Fetch flight route data by callsign
   */
  async getFlightRoute(callsign: string): Promise<ADSBFlightRoute | null> {
    const url = `${ADSB_BASE_URL}/callsign/${callsign}`;
    const cacheKey = `callsign_${callsign}`;

    const response = await this.fetchWithCache<any>(url, cacheKey);
    return response?.response?.flightroute || null;
  }

  /**
   * Fetch airline data by airline code
   */
  async getAirline(airlineCode: string): Promise<ADSBAirline | null> {
    const url = `${ADSB_BASE_URL}/airline/${airlineCode}`;
    const cacheKey = `airline_${airlineCode}`;

    const response = await this.fetchWithCache<any>(url, cacheKey);
    const airlines = response?.response;
    return Array.isArray(airlines) && airlines.length > 0 ? airlines[0] : null;
  }

  /**
   * Get random aircraft identifiers to fetch data
   */
  private getRandomAircraftIdentifiers(): string[] {
    // Common Mode S codes and registrations for testing
    return [
      "N12345",
      "G-ABCD",
      "D-ERIA",
      "F-GKXY",
      "JA123A",
      "VH-ABC",
      "C-GABC",
      "PH-ABC",
      "OE-ABC",
      "SE-ABC",
      "3D325C",
      "406B2C",
      "4B1234",
      "A12345",
      "B23456",
    ];
  }

  /**
   * Get random callsigns to fetch flight routes
   */
  private getRandomCallsigns(): string[] {
    return [
      "SAS2168",
      "BAW123",
      "DLH456",
      "AFR789",
      "KLM012",
      "UAE345",
      "QFA678",
      "SWR901",
      "AUA234",
      "LOT567",
      "AAL890",
      "UAL123",
      "DAL456",
      "SWA789",
      "JBU012",
    ];
  }

  /**
   * Get random airline codes
   */
  private getRandomAirlineCodes(): string[] {
    return [
      "SAS",
      "BAW",
      "DLH",
      "AFR",
      "KLM",
      "UAE",
      "QFA",
      "SWR",
      "AUA",
      "LOT",
      "AAL",
      "UAL",
      "DAL",
      "SWA",
      "JBU",
    ];
  }

  /**
   * Generate random flight data using ADSB API
   */
  async generateRandomFlights(count: number = 20): Promise<any[]> {
    const flights: any[] = [];
    const aircraftIds = this.getRandomAircraftIdentifiers();
    const callsigns = this.getRandomCallsigns();
    const airlineCodes = this.getRandomAirlineCodes();

    for (let i = 0; i < count; i++) {
      try {
        // Get random identifiers
        const aircraftId =
          aircraftIds[Math.floor(Math.random() * aircraftIds.length)];
        const callsign =
          callsigns[Math.floor(Math.random() * callsigns.length)];
        const airlineCode =
          airlineCodes[Math.floor(Math.random() * airlineCodes.length)];

        // Fetch data from ADSB API (with fallbacks)
        const [aircraft, flightRoute, airline] = await Promise.allSettled([
          this.getAircraft(aircraftId),
          this.getFlightRoute(callsign),
          this.getAirline(airlineCode),
        ]);

        // Extract data from settled promises
        const aircraftData =
          aircraft.status === "fulfilled" ? aircraft.value : null;
        const routeData =
          flightRoute.status === "fulfilled" ? flightRoute.value : null;
        const airlineData =
          airline.status === "fulfilled" ? airline.value : null;

        // Generate flight with real data where available, fallback to mock data
        const flight = this.createFlightFromADSBData(
          i + 1,
          aircraftData,
          routeData,
          airlineData
        );
        flights.push(flight);

        // Small delay to avoid rate limiting
        if (i < count - 1) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      } catch (error) {
        console.warn(`Error generating flight ${i + 1}:`, error);
        // Add fallback flight
        flights.push(this.createFallbackFlight(i + 1));
      }
    }

    return flights;
  }

  private createFlightFromADSBData(
    index: number,
    aircraft: ADSBAircraft | null,
    route: ADSBFlightRoute | null,
    airline: ADSBAirline | null
  ): any {
    const flightId = `FL${index.toString().padStart(3, "0")}`;

    // Use real data where available, fallback to generated data
    const airlineName =
      route?.airline?.name || airline?.name || `Airline ${index}`;
    const flightNumber =
      route?.callsign_iata || `${airline?.iata || "XX"}${1000 + index}`;
    const aircraftType =
      aircraft?.type || aircraft?.manufacturer || "Boeing 737-800";

    // Origin and destination
    const origin = route?.origin
      ? {
          code: route.origin.iata_code,
          city: route.origin.municipality,
          airport: route.origin.name,
          terminal: `Terminal ${Math.floor(Math.random() * 5) + 1}`,
        }
      : {
          code: ["JFK", "LAX", "ORD", "DFW", "ATL"][
            Math.floor(Math.random() * 5)
          ],
          city: ["New York", "Los Angeles", "Chicago", "Dallas", "Atlanta"][
            Math.floor(Math.random() * 5)
          ],
          airport: "International Airport",
          terminal: `Terminal ${Math.floor(Math.random() * 5) + 1}`,
        };

    const destination = route?.destination
      ? {
          code: route.destination.iata_code,
          city: route.destination.municipality,
          airport: route.destination.name,
          terminal: `Terminal ${Math.floor(Math.random() * 5) + 1}`,
        }
      : {
          code: ["CDG", "LHR", "NRT", "SYD", "DXB"][
            Math.floor(Math.random() * 5)
          ],
          city: ["Paris", "London", "Tokyo", "Sydney", "Dubai"][
            Math.floor(Math.random() * 5)
          ],
          airport: "International Airport",
          terminal: `Terminal ${Math.floor(Math.random() * 5) + 1}`,
        };

    // Generate times
    const departureDate = new Date(
      Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000
    );
    const flightDurationHours = Math.floor(Math.random() * 12) + 2;
    const arrivalDate = new Date(
      departureDate.getTime() + flightDurationHours * 60 * 60 * 1000
    );

    return {
      id: flightId,
      airline: airlineName,
      flightNumber,
      aircraft: aircraftType,
      origin,
      destination,
      departure: {
        date: departureDate.toISOString().split("T")[0],
        time: departureDate.toTimeString().slice(0, 5),
        timezone: "UTC",
      },
      arrival: {
        date: arrivalDate.toISOString().split("T")[0],
        time: arrivalDate.toTimeString().slice(0, 5),
        timezone: "UTC",
      },
      duration: `${flightDurationHours}h ${Math.floor(Math.random() * 60)}m`,
      pricing: {
        economy: Math.floor(Math.random() * 800) + 200,
        business: Math.floor(Math.random() * 2500) + 1500,
        first: Math.floor(Math.random() * 5000) + 3000,
        currency: "USD",
      },
      availability: {
        economy: Math.floor(Math.random() * 150) + 50,
        business: Math.floor(Math.random() * 30) + 10,
        first: Math.floor(Math.random() * 8) + 2,
      },
      amenities: [
        "WiFi",
        "Entertainment",
        "Meals",
        "Extra Legroom",
        "Priority Boarding",
      ].slice(0, Math.floor(Math.random() * 3) + 2),
      baggage: {
        carryOn: "1 piece (10kg)",
        checked: "2 pieces (23kg each)",
      },
      meal: ["Standard", "Vegetarian", "Kosher", "Halal"][
        Math.floor(Math.random() * 4)
      ],
      entertainment: ["Movies", "TV Shows", "Music", "Games"].slice(
        0,
        Math.floor(Math.random() * 2) + 2
      ),
      rating: Math.floor(Math.random() * 2) + 4,
      reviews: Math.floor(Math.random() * 1000) + 50,
      stops: Math.floor(Math.random() * 3),
      layovers:
        Math.random() > 0.5
          ? [
              {
                airport: "Transfer Hub",
                duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
              },
            ]
          : undefined,
    };
  }

  private createFallbackFlight(index: number): any {
    return {
      id: `FL${index.toString().padStart(3, "0")}`,
      airline: `Airline ${index}`,
      flightNumber: `AA${1000 + index}`,
      aircraft: "Boeing 737",
      origin: {
        code: "JFK",
        city: "New York",
        airport: "John F. Kennedy International Airport",
      },
      destination: {
        code: "LAX",
        city: "Los Angeles",
        airport: "Los Angeles International Airport",
      },
      departure: {
        date: new Date().toISOString().split("T")[0],
        time: "10:00",
        timezone: "UTC",
      },
      arrival: {
        date: new Date().toISOString().split("T")[0],
        time: "16:00",
        timezone: "UTC",
      },
      duration: "6h 00m",
      pricing: {
        economy: 299,
        business: 899,
        first: 1999,
        currency: "USD",
      },
      availability: {
        economy: 100,
        business: 20,
        first: 4,
      },
      amenities: ["WiFi", "Entertainment"],
      baggage: {
        carryOn: "1 piece (10kg)",
        checked: "2 pieces (23kg each)",
      },
      meal: "Standard",
      entertainment: ["Movies", "TV Shows"],
      rating: 4,
      reviews: 100,
      stops: 0,
    };
  }
}

export const adsbService = new ADSBService();
