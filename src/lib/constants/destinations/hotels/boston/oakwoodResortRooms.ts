import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-boston-2-room-1",
    name: "Premium King Room",
    description:
      "Our Premium-themed king room offers retro luxury, panoramic with a private balcony overlooking the sea, and with a spacious work area, inspired by with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 1,
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
      "Jacuzzi Tub",
      "Balcony",
      "Mini Bar",
    ],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 136,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
];
