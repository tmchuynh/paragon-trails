import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-singapore-7-room-6",
    name: "Executive King Room",
    description:
      "Executive-themed room with peaceful decor, with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Complimentary Bottled Water",
      "Seating Area",
      "Balcony",
      "Streaming Services",
      "Bathtub",
    ],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 277,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
];
