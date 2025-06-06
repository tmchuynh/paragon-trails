import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-tampa-6-room-5",
    name: "Classic King Studio",
    description:
      "Classic-themed studio with elegant decor, featuring uninterrupted ocean vistas, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Wake-Up Service",
      "Mini Bar",
      "Bathtub",
      "Flat-Screen TV",
    ],
    pricePerNight: 273,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
];
