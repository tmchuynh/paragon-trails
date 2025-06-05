import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-4-room-3",
    name: "Coffee King Penthouse",
    description: "Our Coffee-themed king penthouse offers snug luxury, panoramic where the city comes alive at dusk, and with a spacious work area, inspired by blending energetic designs with relaxed comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Streaming Services", "Pet Friendly", "Connecting Rooms"],
    pricePerNight: 192,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
