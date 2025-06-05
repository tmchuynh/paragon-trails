import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-santiago-6-room-5",
    name: "Viña King Loft",
    description:
      "This expansive king loft promises where you can enjoy the tranquility of nature, enriched by Viña-themed details and with high-speed internet access.",
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
      "Family Room",
      "Jacuzzi Tub",
      "Board Games",
    ],
    pricePerNight: 169,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
