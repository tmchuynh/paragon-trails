import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Silk Road Retreat
export const silkRoadRetreatRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-3-room-2",
    name: "Tranquility King Suite",
    description:
      "Relax in our fashionable homey king suite featuring with a view of the garden's vibrant colors, along with including climate control for your comfort and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
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
      "Streaming Services",
      "Board Games",
      "Soundproofing",
      "Refrigerator",
      "Bathtub",
    ],
    pricePerNight: 365,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
];
