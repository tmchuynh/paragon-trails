import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kyoto Imperial Inn
export const kyotoImperialInnRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-4-room-3",
    name: "Sakura Single Suite",
    description:
      "Our Sakura-themed single suite offers serene luxury, panoramic overlooking the vibrant cityscape, and with carefully selected furnishings, inspired by with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
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
      "Fireplace",
      "Books",
      "Complimentary Bottled Water",
      "Sauna",
    ],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 84,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
];
