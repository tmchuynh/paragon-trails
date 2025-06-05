import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-mykonos-1-room-0",
    name: "Classic King Suite",
    description:
      "Discover the charm of this Classic-themed king suite, complete with glamorous ambiance, stunning where you can take in the fresh mountain air, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
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
      "Soundproofing",
      "Bathtub",
      "Connecting Rooms",
    ],
    pricePerNight: 217,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
