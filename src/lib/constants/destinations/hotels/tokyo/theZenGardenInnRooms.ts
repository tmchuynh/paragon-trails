import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Zen Garden Inn
export const theZenGardenInnRooms: RoomOption[] = [
  {
    id: "hotel-tokyo-1-room-0",
    name: "Luxury Double Villa",
    description:
      "A airy double retreat with stunning views of the city skyline, combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
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
      "Refrigerator",
      "Mini Bar",
      "Outdoor Furniture",
      "Dining Table",
      "Blackout Curtains",
      "Pet Friendly",
    ],
    pricePerNight: 99,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
];
