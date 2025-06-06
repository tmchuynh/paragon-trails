import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-4-room-3",
    name: "Reefside King Villa",
    description: "This vast king accommodation offers with a pleasant outlook, highlighting Bermuda’s unique island heritage.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Kitchenette", "Mini Bar", "Fireplace", "Dining Table"],
    pricePerNight: 257,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-bermuda-4-room-3",
    name: "Nautical Double Loft",
    description: "Nautical-themed loft with classic decor, with a view of snow-capped peaks, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Seating Area", "Pet Friendly", "Board Games", "Family Room"],
    pricePerNight: 227,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
