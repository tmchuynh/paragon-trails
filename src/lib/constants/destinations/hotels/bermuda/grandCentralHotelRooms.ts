import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-4-room-3",
    name: "Atlantic King Room",
    description:
      "Experience our prestigious, spacious king room where the city comes alive at dusk, with a private balcony or terrace.",
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
      "Ironing Facilities",
      "Soundproofing",
      "Streaming Services",
      "Outdoor Furniture",
      "Balcony",
      "Sauna",
    ],
    pricePerNight: 138,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
];
