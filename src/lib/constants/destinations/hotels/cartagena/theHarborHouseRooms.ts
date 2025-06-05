import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-3-room-2",
    name: "Andean King Villa",
    description:
      "Andean-themed king villa where you can feel the ocean breeze, blending energetic designs with relaxed comfort and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: [
      "Desk",
      "Free Wi-Fi",
      "Room Service",
      "Hair Dryer",
      "Toiletries",
      "Microwave",
      "Shower",
      "Heating",
      "Coffee Maker",
      "Slippers",
      "Bathrobe",
      "Room Service",
      "Alarm Clock",
      "Desk Lamp",
      "Daily Housekeeping",
      "Non-Smoking Room",
      "Television",
      "Air Conditioning",
      "Refrigerator",
      "Soundproofing",
      "In-Room Safe",
    ],
    pricePerNight: 352,
    currency: "COP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
];
