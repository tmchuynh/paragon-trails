import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-sydney-1-room-0",
    name: "Outback King Room",
    description: "This roomy king room promises where you can enjoy the serenity of a garden retreat, enriched by Outback-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Dining Table", "Bluetooth Speaker", "Ironing Facilities"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 416,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
