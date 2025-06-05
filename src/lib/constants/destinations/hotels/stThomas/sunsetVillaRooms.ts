import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-4-room-3",
    name: "Harmony King Studio",
    description: "A heartwarming king retreat with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Family Room", "Refrigerator", "Fitness Equipment"],
    pricePerNight: 263,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-st-thomas-4-room-3",
    name: "Modern King Suite",
    description: "This fashionable king suite promises with a view of the ocean's changing tides, enriched by Modern-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Luggage Rack", "Balcony", "Dining Table", "Smoke Detector", "Flat-Screen TV"],
    pricePerNight: 365,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
