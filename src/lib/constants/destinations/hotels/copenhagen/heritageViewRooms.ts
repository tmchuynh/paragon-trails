import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-copenhagen-5-room-4",
    name: "Tranquility King Room",
    description:
      "Our elegant Tranquility-themed room offers where you can feel the ocean breeze, pleasant comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
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
      "Bluetooth Speaker",
      "Seating Area",
      "Smoke Detector",
      "Jacuzzi Tub",
    ],
    pricePerNight: 181,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
];
