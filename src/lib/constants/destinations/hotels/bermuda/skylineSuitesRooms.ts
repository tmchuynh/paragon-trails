import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-1-room-0",
    name: "Grotto King Penthouse",
    description:
      "Experience our stylish, calming king penthouse where the ocean meets the sky, featuring a curated minibar selection.",
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
      "Wake-Up Service",
      "Jacuzzi Tub",
      "Streaming Services",
      "Kitchenette",
    ],
    pricePerNight: 146,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
