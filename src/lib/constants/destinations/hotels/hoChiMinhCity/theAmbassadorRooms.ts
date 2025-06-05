import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-4-room-3",
    name: "Classic King Studio",
    description:
      "This voluminous king studio promises with a pleasant outlook, enriched by Classic-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Bluetooth Speaker",
      "Fireplace",
      "Wake-Up Service",
    ],
    pricePerNight: 148,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
];
