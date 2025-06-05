import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Nippon Prestige
export const nipponPrestigeRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-4-room-3",
    name: "Harmony King Loft",
    description:
      "This intimate king loft promises with a view of the mountains' breathtaking sunsets, enriched by Harmony-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Bathtub",
      "Balcony",
      "In-Room Safe",
      "Kitchenette",
      "Blackout Curtains",
      "Accessible Room",
    ],
    pricePerNight: 339,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
