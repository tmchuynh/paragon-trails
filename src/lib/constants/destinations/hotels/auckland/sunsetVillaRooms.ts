import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-auckland-5-room-4",
    name: "Maori King Penthouse",
    description:
      "Experience our large-scale, exquisite king penthouse with a view of the garden's peaceful ambiance, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
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
      "Dining Table",
      "Pet Friendly",
      "Streaming Services",
    ],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 309,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
];
