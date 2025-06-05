import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Shanghai Grand
export const shanghaiGrandRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-4-room-3",
    name: "Horizon King Apartment",
    description:
      "Indulge in the well-proportioned atmosphere of our king apartment, with spectacular where you can take in the fresh mountain air, created with both style and function in mind, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Mini Bar",
      "Refrigerator",
      "Streaming Services",
      "Flat-Screen TV",
      "Fitness Equipment",
    ],
    pricePerNight: 178,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
];
