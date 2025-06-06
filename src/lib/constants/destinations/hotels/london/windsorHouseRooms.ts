import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Windsor House
export const windsorHouseRooms: RoomOption[] = [
  {
    id: "hotel-london-2-room-1",
    name: "Kensington King Studio",
    description:
      "Our Kensington-themed king studio offers expansive luxury, panoramic featuring a blend of modern and historic architecture, and with carefully selected furnishings, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 1,
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
      "Family Room",
      "Kitchenette",
      "In-Room Safe",
      "Mini Bar",
    ],
    pricePerNight: 178,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
