import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-tampa-3-room-2",
    name: "Superior King Room",
    description:
      "Our Superior-themed king room offers sleek luxury, panoramic where nature is just outside your window, and with a spacious work area, inspired by with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Ironing Facilities",
      "Board Games",
      "Accessible Room",
    ],
    pricePerNight: 150,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
];
