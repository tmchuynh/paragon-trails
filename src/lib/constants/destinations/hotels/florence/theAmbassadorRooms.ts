import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-florence-2-room-1",
    name: "Harmony Sofa Bed Apartment",
    description:
      "Experience our relaxing, comfortable sofa bed apartment with breathtaking sea views, including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
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
      "Ironing Facilities",
      "Seating Area",
      "In-Room Safe",
      "Fitness Equipment",
    ],
    pricePerNight: 210,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
];
