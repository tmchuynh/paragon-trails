import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Nippon Prestige
export const nipponPrestigeRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-4-room-3",
    name: "Luxury King Villa",
    description: "Luxury-themed villa with open-concept decor, where you can watch the city wake up, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Blackout Curtains", "Kitchenette"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 150,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
