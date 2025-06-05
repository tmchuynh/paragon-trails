import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-montevideo-4-room-3",
    name: "Classic King Studio",
    description:
      "This minimalist king studio promises with majestic mountain vistas, enriched by Classic-themed details and complete with a well-appointed bathroom.",
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
      "Wake-Up Service",
      "Bathtub",
      "Books",
    ],
    pricePerNight: 354,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
];
