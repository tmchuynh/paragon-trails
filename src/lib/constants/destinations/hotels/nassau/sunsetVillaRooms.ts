import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-nassau-7-room-6",
    name: "Sunset Twin Penthouse",
    description:
      "A ample twin retreat where the city comes alive at dusk, with bright tropical colors and seaside charm.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
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
      "In-Room Safe",
      "Flat-Screen TV",
      "Ironing Facilities",
      "Family Room",
      "Refrigerator",
      "Pet Friendly",
    ],
    pricePerNight: 106,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
];
