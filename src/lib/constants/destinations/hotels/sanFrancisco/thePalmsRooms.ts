import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-5-room-4",
    name: "Modern Sofa Bed Villa",
    description:
      "This ample sofa bed accommodation offers where the city skyline meets the horizon, designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
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
      "Flat-Screen TV",
      "Wake-Up Service",
      "Soundproofing",
      "Books",
      "Smoke Detector",
    ],
    pricePerNight: 118,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
];
