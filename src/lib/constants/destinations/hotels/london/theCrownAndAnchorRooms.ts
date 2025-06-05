import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Crown and Anchor
export const theCrownAndAnchorRooms: RoomOption[] = [
  {
    id: "hotel-london-6-room-5",
    name: "Standard Double Loft",
    description: "Our inviting Standard-themed loft offers with a view of iconic landmarks, retro comfort, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Mini Bar", "Streaming Services", "Fireplace"],
    pricePerNight: 108,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-london-6-room-5",
    name: "Westminster Double Studio",
    description: "Our refreshing Westminster-themed studio offers where you can take in the fresh mountain air, sleek comfort, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Books", "Mini Bar", "Luggage Rack", "Balcony"],
    pricePerNight: 116,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-london-6-room-5",
    name: "Executive Queen Studio",
    description: "This tranquil queen studio promises where the city comes alive at dusk, enriched by Executive-themed details and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Streaming Services"],
    pricePerNight: 137,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
