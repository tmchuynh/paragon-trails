import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-paris-3-room-2",
    name: "Harmony King Villa",
    description:
      "Unwind in this large-scale king villa where city lights twinkle at night, with a luxurious soaking tub.",
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
      "Wake-Up Service",
      "Bluetooth Speaker",
      "Dining Table",
      "Family Room",
    ],
    pricePerNight: 179,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
];
