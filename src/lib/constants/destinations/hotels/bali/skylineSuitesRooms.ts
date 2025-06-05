import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-bali-5-room-4",
    name: "Island Breeze King Room",
    description: "Island Breeze-themed room with stylish decor, with a view of the city's waterfront, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Dining Table", "Flat-Screen TV", "Board Games", "Seating Area"],
    pricePerNight: 183,
    currency: "IDR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
