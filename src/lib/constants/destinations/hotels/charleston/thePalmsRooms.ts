import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-charleston-2-room-1",
    name: "Liberty King Suite",
    description:
      "Liberty-themed suite with welcoming decor, where you can find inspiration in the mountains, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Dining Table",
      "Mini Bar",
      "Books",
    ],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible"],
    pricePerNight: 597,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
