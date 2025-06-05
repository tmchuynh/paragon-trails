import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Laurentian
export const theLaurentianRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-3-room-2",
    name: "Executive King Room",
    description: "Our Executive-themed king room offers glamorous luxury, panoramic where the city comes alive at dusk, and with a spacious work area, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Dining Table", "Ironing Facilities", "Bathtub", "Wake-Up Service"],
    pricePerNight: 307,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
