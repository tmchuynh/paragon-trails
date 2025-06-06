import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-1-room-0",
    name: "Modern Single Loft",
    description:
      "Modern-themed single loft with a view of the garden's peaceful ambiance, created with both style and function in mind and with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
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
      "Connecting Rooms",
      "Seating Area",
      "Refrigerator",
      "Sauna",
      "Smoke Detector",
    ],
    pricePerNight: 208,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
];
