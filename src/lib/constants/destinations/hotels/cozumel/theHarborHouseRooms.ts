import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-1-room-0",
    name: "Mayan King Villa",
    description: "Step into a grandiose king villa that combines Mayan-themed with breathtaking overlooking lush garden landscapes, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Bluetooth Speaker", "Outdoor Furniture", "Mini Bar", "In-Room Safe", "Soundproofing"],
    pricePerNight: 170,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
