import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-2-room-1",
    name: "Classic King Studio",
    description:
      "Unwind in this commodious king studio where city lights twinkle at night, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Kitchenette",
      "Flat-Screen TV",
      "Fireplace",
      "Jacuzzi Tub",
      "Books",
    ],
    pricePerNight: 145,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
];
