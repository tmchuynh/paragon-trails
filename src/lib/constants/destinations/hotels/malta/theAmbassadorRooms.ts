import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-malta-1-room-0",
    name: "Executive Queen Suite",
    description:
      "Unwind in this welcoming queen suite with a pleasant outlook, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
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
      "Ironing Facilities",
      "In-Room Safe",
      "Family Room",
    ],
    pricePerNight: 136,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
