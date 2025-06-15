// This file now uses API services instead of mock data
// Flights are generated using ADSB Database API for real flight data

export {
  adsbService,
  ContactService,
  ProductService,
} from "@/lib/api/services";

// Re-export the Flight interface for backward compatibility
export type { Flight } from "@/lib/interfaces/services/flights";
export { getMockFlights as mockFlights_async };

// Generate flight data using ADSB Database API
const generateFlightData = async (): Promise<any[]> => {
  const { adsbService } = await import("@/lib/api/services");

  try {
    // Use ADSB service to generate real flight data
    console.log("Fetching real flight data from ADSB Database API...");
    return await adsbService.generateRandomFlights(25);
  } catch (error) {
    console.error("Error generating flight data from ADSB API:", error);

    // Fallback to simple mock data if API fails
    return Array.from({ length: 20 }, (_, index) => ({
      id: `FL${(index + 1).toString().padStart(3, "0")}`,
      airline: `Airline ${index + 1}`,
      flightNumber: `AA${1000 + index}`,
      aircraft: "Boeing 737-800",
      origin: {
        code: ["JFK", "LAX", "ORD", "DFW", "ATL"][index % 5],
        city: ["New York", "Los Angeles", "Chicago", "Dallas", "Atlanta"][
          index % 5
        ],
        airport: "International Airport",
        terminal: `Terminal ${Math.floor(Math.random() * 5) + 1}`,
      },
      destination: {
        code: ["CDG", "LHR", "NRT", "SYD", "DXB"][index % 5],
        city: ["Paris", "London", "Tokyo", "Sydney", "Dubai"][index % 5],
        airport: "International Airport",
        terminal: `Terminal ${Math.floor(Math.random() * 5) + 1}`,
      },
      departure: {
        date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        time: `${Math.floor(Math.random() * 24)
          .toString()
          .padStart(2, "0")}:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, "0")}`,
        timezone: "UTC",
      },
      arrival: {
        date: new Date(
          Date.now() +
            Math.random() * 30 * 24 * 60 * 60 * 1000 +
            8 * 60 * 60 * 1000
        )
          .toISOString()
          .split("T")[0],
        time: `${Math.floor(Math.random() * 24)
          .toString()
          .padStart(2, "0")}:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, "0")}`,
        timezone: "UTC",
      },
      duration: `${Math.floor(Math.random() * 12) + 2}h ${Math.floor(Math.random() * 60)}m`,
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
      rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
      reviews: Math.floor(Math.random() * 1000) + 50,
      stops: Math.floor(Math.random() * 3), // 0-2 stops
      layovers:
        Math.random() > 0.5
          ? [
              {
                airport: "Transfer Hub",
                duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
              },
            ]
          : undefined,
    }));
  }
};

// Mock flights function for backward compatibility
export const getMockFlights = async (): Promise<any[]> => {
  try {
    return await generateFlightData();
  } catch (error) {
    console.error("Error generating flight data:", error);
    // Fallback to simple mock data
    return Array.from({ length: 20 }, (_, index) => ({
      id: `FL${(index + 1).toString().padStart(3, "0")}`,
      airline: `Airline ${index + 1}`,
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
    }));
  }
};

// Export mock data for components that need immediate access
export const mockFlights = [];
