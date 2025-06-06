import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-sitka-2-room-1",
    name: "Premium Sofa Bed Suite",
    description:
      "Discover the charm of this Premium-themed sofa bed suite, complete with contemporary ambiance, stunning where the city comes alive at dusk, and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
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
      "Bathtub",
      "Seating Area",
      "Streaming Services",
      "Kitchenette",
      "Outdoor Furniture",
    ],
    pricePerNight: 85,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
];
