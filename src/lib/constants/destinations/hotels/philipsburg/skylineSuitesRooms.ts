import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Tropical Sky King Suite",
    description:
      "This voluminous king suite promises where you can enjoy the city's energy, enriched by Tropical Sky-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
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
      "Board Games",
      "Blackout Curtains",
      "Streaming Services",
      "Outdoor Furniture",
    ],
    pricePerNight: 324,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
