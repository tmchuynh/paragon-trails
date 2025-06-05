import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-nassau-2-room-1",
    name: "Lagoon King Suite",
    description: "Lagoon-themed suite with well-proportioned decor, with a view of the garden's tranquil pathways, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Dining Table", "Outdoor Furniture", "Smoke Detector", "Bluetooth Speaker"],
    pricePerNight: 349,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
