// This file now uses API services instead of mock data
// Flights are generated using multiple API sources

export { ContactService, ProductService } from "@/lib/api/services";

// Re-export the Flight interface for backward compatibility
export type { Flight } from "@/lib/interfaces/services/flights";
export { getMockFlights as mockFlights_async };

// Generate flight data using API services
const generateFlightData = async (): Promise<any[]> => {
  const { ContactService } = await import("@/lib/api/services");
  const companies = await ContactService.generateContactInfo(30);

  return companies.map((company: any, index: number) => ({
    id: `FL${(index + 1).toString().padStart(3, "0")}`,
    airline: {
      name: company.name || `Airline ${index + 1}`,
      code: `A${index + 1}`,
      logo: `https://via.placeholder.com/100x50?text=AL${index + 1}`,
    },
    aircraft: {
      model: ["Boeing 737", "Airbus A320", "Boeing 777", "Airbus A380"][
        Math.floor(Math.random() * 4)
      ],
      registration: `N${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")}`,
    },
    route: {
      departure: {
        airport: {
          code: ["JFK", "LAX", "ORD", "DFW", "ATL"][
            Math.floor(Math.random() * 5)
          ],
          name: "International Airport",
          city: "Major City",
          country: "USA",
        },
        terminal: Math.floor(Math.random() * 5) + 1,
        gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 6))}${Math.floor(Math.random() * 50) + 1}`,
        datetime: new Date(
          Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
      },
      arrival: {
        airport: {
          code: ["CDG", "LHR", "NRT", "SYD", "DXB"][
            Math.floor(Math.random() * 5)
          ],
          name: "International Airport",
          city: "Destination City",
          country: "International",
        },
        terminal: Math.floor(Math.random() * 5) + 1,
        gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 6))}${Math.floor(Math.random() * 50) + 1}`,
        datetime: new Date(
          Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000 + 3600000
        ).toISOString(),
      },
      duration: `${Math.floor(Math.random() * 12) + 2}h ${Math.floor(Math.random() * 60)}m`,
      distance: Math.floor(Math.random() * 10000) + 500,
      stops: Math.floor(Math.random() * 3), // 0-2 stops
    },
    pricing: {
      economy: Math.floor(Math.random() * 800) + 200,
      premium: Math.floor(Math.random() * 1200) + 600,
      business: Math.floor(Math.random() * 2500) + 1500,
      first: Math.floor(Math.random() * 5000) + 3000,
      currency: "USD",
      taxes: Math.floor(Math.random() * 100) + 50,
      fees: Math.floor(Math.random() * 50) + 20,
    },
    seating: {
      economy: {
        available: Math.floor(Math.random() * 50) + 10,
        total: 180,
        configuration: "3-3",
      },
      premium: {
        available: Math.floor(Math.random() * 20) + 5,
        total: 36,
        configuration: "2-2",
      },
      business: {
        available: Math.floor(Math.random() * 10) + 2,
        total: 24,
        configuration: "1-1",
      },
      first: {
        available: Math.floor(Math.random() * 5) + 1,
        total: 8,
        configuration: "1-1",
      },
    },
    amenities: [
      "In-flight entertainment",
      "WiFi available",
      "Meal service",
      "Power outlets",
      "USB charging",
    ],
    baggage: {
      carry: { included: 1, weight: 7, dimensions: "55x40x20 cm" },
      checked: { included: 1, weight: 23, additionalFee: 50 },
    },
    policies: {
      cancellation: "Cancellation allowed up to 24 hours before departure",
      changes: "Changes allowed with fee",
      refund: "Refundable with conditions",
    },
    status: "Scheduled",
    onTime: Math.random() > 0.2, // 80% on time
    tags: ["Popular", "Direct", "Comfortable"],
    rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
    reviews: Math.floor(Math.random() * 1000) + 50,
  }));
};

// Legacy export for components that still expect mockFlights
export const getMockFlights = async () => {
  return await generateFlightData();
};

// For components that need a single flight
export const getMockFlight = async (id: string) => {
  const flights = await getMockFlights();
  return flights.find((flight) => flight.id === id) || null;
};

// Backward compatibility exports
export const mockFlights = [];
