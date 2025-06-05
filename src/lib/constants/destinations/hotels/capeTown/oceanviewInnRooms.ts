import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-1-room-0",
    name: "Tranquility King Suite",
    description:
      "Unwind in this voluminous king suite where you can enjoy the city's energy, with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Flat-Screen TV",
      "Ironing Facilities",
      "Soundproofing",
      "Jacuzzi Tub",
      "Refrigerator",
    ],
    pricePerNight: 141,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
