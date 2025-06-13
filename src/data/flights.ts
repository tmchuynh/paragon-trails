import { Flight } from "@/lib/interfaces/services/flights";

export const mockFlights: Flight[] = [
  {
    id: "FL001",
    airline: "United Airlines",
    flightNumber: "UA 2847",
    aircraft: "Boeing 777-300ER",
    origin: {
      code: "JFK",
      city: "New York",
      airport: "John F. Kennedy International Airport",
      terminal: "Terminal 4"
    },
    destination: {
      code: "LAX",
      city: "Los Angeles",
      airport: "Los Angeles International Airport",
      terminal: "Terminal 7"
    },
    departure: {
      date: "2025-07-15",
      time: "08:00",
      timezone: "EST"
    },
    arrival: {
      date: "2025-07-15",
      time: "11:30",
      timezone: "PST"
    },
    duration: "6h 30m",
    pricing: {
      economy: 299,
      business: 1299,
      first: 2499,
      currency: "USD"
    },
    availability: {
      economy: 45,
      business: 12,
      first: 4
    },
    amenities: [
      "In-flight Wi-Fi",
      "Personal Entertainment System",
      "USB Power",
      "Complimentary Snacks",
      "Premium Beverages"
    ],
    baggage: {
      carryOn: "1 carry-on bag (22 x 14 x 9 inches)",
      checked: "1 checked bag (50 lbs) included in economy"
    },
    meal: "Breakfast service",
    entertainment: [
      "200+ movies and TV shows",
      "Music library",
      "Games",
      "Live TV"
    ],
    rating: 4.3,
    reviews: 1247,
    stops: 0
  },
  {
    id: "FL002",
    airline: "Delta Air Lines",
    flightNumber: "DL 1634",
    aircraft: "Airbus A350-900",
    origin: {
      code: "ATL",
      city: "Atlanta",
      airport: "Hartsfield-Jackson Atlanta International Airport",
      terminal: "Terminal S"
    },
    destination: {
      code: "CDG",
      city: "Paris",
      airport: "Charles de Gaulle Airport",
      terminal: "Terminal 2E"
    },
    departure: {
      date: "2025-07-20",
      time: "18:45",
      timezone: "EST"
    },
    arrival: {
      date: "2025-07-21",
      time: "12:15",
      timezone: "CET"
    },
    duration: "8h 30m",
    pricing: {
      economy: 650,
      business: 2850,
      first: 4200,
      currency: "USD"
    },
    availability: {
      economy: 23,
      business: 8,
      first: 2
    },
    amenities: [
      "Delta Studio Entertainment",
      "Wi-Fi Available",
      "Power Outlets",
      "Complimentary Meals",
      "Premium Wine Selection"
    ],
    baggage: {
      carryOn: "1 carry-on bag + 1 personal item",
      checked: "1 checked bag (50 lbs) included"
    },
    meal: "Dinner and breakfast service",
    entertainment: [
      "300+ hours of entertainment",
      "Spotify playlist access",
      "International news",
      "Flight tracking"
    ],
    rating: 4.5,
    reviews: 892,
    stops: 0
  },
  {
    id: "FL003",
    airline: "Emirates",
    flightNumber: "EK 231",
    aircraft: "Airbus A380-800",
    origin: {
      code: "DXB",
      city: "Dubai",
      airport: "Dubai International Airport",
      terminal: "Terminal 3"
    },
    destination: {
      code: "LHR",
      city: "London",
      airport: "Heathrow Airport",
      terminal: "Terminal 3"
    },
    departure: {
      date: "2025-07-25",
      time: "14:20",
      timezone: "GST"
    },
    arrival: {
      date: "2025-07-25",
      time: "18:40",
      timezone: "BST"
    },
    duration: "7h 20m",
    pricing: {
      economy: 750,
      business: 3200,
      first: 6500,
      currency: "USD"
    },
    availability: {
      economy: 67,
      business: 15,
      first: 6
    },
    amenities: [
      "ice Entertainment System",
      "Onboard Wi-Fi",
      "Chauffeur Service (First Class)",
      "Onboard Lounge (A380)",
      "Gourmet Dining"
    ],
    baggage: {
      carryOn: "1 carry-on bag (7kg)",
      checked: "30kg checked baggage allowance"
    },
    meal: "Full meal service with multiple options",
    entertainment: [
      "4,500+ channels of entertainment",
      "Live TV",
      "Music and podcasts",
      "Games"
    ],
    rating: 4.7,
    reviews: 2134,
    stops: 0
  },
  {
    id: "FL004",
    airline: "Singapore Airlines",
    flightNumber: "SQ 12",
    aircraft: "Boeing 787-10",
    origin: {
      code: "SIN",
      city: "Singapore",
      airport: "Singapore Changi Airport",
      terminal: "Terminal 3"
    },
    destination: {
      code: "NRT",
      city: "Tokyo",
      airport: "Narita International Airport",
      terminal: "Terminal 1"
    },
    departure: {
      date: "2025-08-01",
      time: "01:35",
      timezone: "SGT"
    },
    arrival: {
      date: "2025-08-01",
      time: "09:25",
      timezone: "JST"
    },
    duration: "6h 50m",
    pricing: {
      economy: 420,
      business: 2100,
      currency: "USD"
    },
    availability: {
      economy: 34,
      business: 18
    },
    amenities: [
      "KrisWorld Entertainment",
      "Complimentary Wi-Fi",
      "Singapore Girl Service",
      "Premium Amenity Kits",
      "Fine Dining"
    ],
    baggage: {
      carryOn: "1 carry-on bag (7kg)",
      checked: "30kg checked baggage"
    },
    meal: "Breakfast service with Asian and Western options",
    entertainment: [
      "1,800+ entertainment options",
      "Noise-cancelling headphones",
      "Interactive games",
      "Destination guides"
    ],
    rating: 4.8,
    reviews: 1567,
    stops: 0
  },
  {
    id: "FL005",
    airline: "American Airlines",
    flightNumber: "AA 198",
    aircraft: "Boeing 737 MAX 8",
    origin: {
      code: "MIA",
      city: "Miami",
      airport: "Miami International Airport",
      terminal: "Terminal D"
    },
    destination: {
      code: "GRU",
      city: "São Paulo",
      airport: "São Paulo/Guarulhos International Airport",
      terminal: "Terminal 3"
    },
    departure: {
      date: "2025-08-05",
      time: "23:55",
      timezone: "EST"
    },
    arrival: {
      date: "2025-08-06",
      time: "10:40",
      timezone: "BRT"
    },
    duration: "8h 45m",
    pricing: {
      economy: 580,
      business: 2400,
      currency: "USD"
    },
    availability: {
      economy: 28,
      business: 6
    },
    amenities: [
      "Flagship Entertainment",
      "Wi-Fi Available",
      "Power at Every Seat",
      "Complimentary Snacks",
      "Main Cabin Extra Available"
    ],
    baggage: {
      carryOn: "1 carry-on bag + 1 personal item",
      checked: "1 checked bag (50 lbs) for fee"
    },
    meal: "Light meal service",
    entertainment: [
      "Live TV",
      "Movies and TV shows",
      "Music streaming",
      "Games"
    ],
    rating: 4.1,
    reviews: 756,
    stops: 0
  },
  {
    id: "FL006",
    airline: "Air Canada",
    flightNumber: "AC 879",
    aircraft: "Boeing 777-200LR",
    origin: {
      code: "YVR",
      city: "Vancouver",
      airport: "Vancouver International Airport",
      terminal: "Terminal M"
    },
    destination: {
      code: "ICN",
      city: "Seoul",
      airport: "Incheon International Airport",
      terminal: "Terminal 1"
    },
    departure: {
      date: "2025-08-10",
      time: "12:30",
      timezone: "PST"
    },
    arrival: {
      date: "2025-08-11",
      time: "16:05",
      timezone: "KST"
    },
    duration: "11h 35m",
    pricing: {
      economy: 720,
      business: 3100,
      currency: "USD"
    },
    availability: {
      economy: 41,
      business: 11
    },
    amenities: [
      "Air Canada Entertainment",
      "Satellite Wi-Fi",
      "Personal Device Entertainment",
      "Canadian Cuisine",
      "Premium Wine Selection"
    ],
    baggage: {
      carryOn: "1 carry-on bag (10kg)",
      checked: "23kg checked baggage included"
    },
    meal: "Lunch and snack service",
    entertainment: [
      "Hundreds of movies and TV shows",
      "Audio entertainment",
      "Games and apps",
      "Moving map"
    ],
    rating: 4.4,
    reviews: 634,
    stops: 0
  }
];