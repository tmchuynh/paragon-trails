import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Osaka Serenity
export const osakaSerenityRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-1-room-0",
    name: "Fuji Single Studio",
    description:
      "Unwind in this spacious single studio where you can gaze at the towering peaks, with a spacious seating area.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
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
      "Seating Area",
      "Refrigerator",
      "Soundproofing",
      "Board Games",
      "Kitchenette",
    ],
    pricePerNight: 108,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
];
