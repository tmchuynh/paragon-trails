import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-milan-1-room-0",
    name: "Harmony Queen Penthouse",
    description: "Unwind in this avant-garde queen penthouse where you can relax in a natural oasis, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Dining Table", "Flat-Screen TV", "Bluetooth Speaker", "Smoke Detector"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
