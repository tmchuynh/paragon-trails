import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-4-room-3",
    name: "Signature Double Room",
    description:
      "Experience our peaceful, fashionable double room with a pleasant outlook, with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
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
      "In-Room Safe",
      "Streaming Services",
      "Mini Bar",
    ],
    pricePerNight: 179,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
];
