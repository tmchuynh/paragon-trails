import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-singapore-1-room-0",
    name: "Sentosa Sofa Bed Suite",
    description: "A snug sofa bed retreat where the city skyline meets the horizon, featuring sleek, contemporary designs.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Blackout Curtains", "Mini Bar"],
    pricePerNight: 185,
    currency: "SGD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-singapore-1-room-0",
    name: "Skyline Sofa Bed Loft",
    description: "Unwind in this artistic sofa bed loft with a view of the ocean's changing tides, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Dining Table", "Wake-Up Service", "Luggage Rack", "Bathtub"],
    pricePerNight: 233,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-singapore-1-room-0",
    name: "Sentosa Twin Loft",
    description: "This snug twin loft promises with a view of the city's waterfront, enriched by Sentosa-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Seating Area", "Blackout Curtains", "Luggage Rack", "Accessible Room"],
    pricePerNight: 185,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
