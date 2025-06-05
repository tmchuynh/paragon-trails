import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-juneau-3-room-2",
    name: "Pioneer King Villa",
    description: "A classic king retreat with a view of shaded garden paths, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Balcony", "Pet Friendly", "Board Games", "Seating Area", "Fireplace"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 162,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
