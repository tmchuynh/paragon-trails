import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-4-room-3",
    name: "Standard Single Penthouse",
    description:
      "Discover the charm of this Standard-themed single penthouse, complete with commodious ambiance, stunning where you can find inspiration in the mountains, and with high-speed internet access.",
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
      "Ironing Facilities",
      "Wake-Up Service",
      "Fireplace",
      "Fitness Equipment",
    ],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 91,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
