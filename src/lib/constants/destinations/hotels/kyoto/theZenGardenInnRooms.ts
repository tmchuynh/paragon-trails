import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Zen Garden Inn
export const theZenGardenInnRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-4-room-3",
    name: "Fuji King Loft",
    description:
      "Discover the charm of this Fuji-themed king loft, complete with rustic ambiance, stunning where you can gaze at the towering peaks, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
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
      "Refrigerator",
      "Luggage Rack",
      "Connecting Rooms",
      "Books",
      "In-Room Safe",
    ],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 117,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
