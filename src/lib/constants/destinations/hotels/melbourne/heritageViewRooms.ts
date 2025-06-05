import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-3-room-2",
    name: "Outback King Studio",
    description:
      "Unwind in this sumptuous king studio with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Flat-Screen TV",
      "Sauna",
      "Ironing Facilities",
    ],
    pricePerNight: 290,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
