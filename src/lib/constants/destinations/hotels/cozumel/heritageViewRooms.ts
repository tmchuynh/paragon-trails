import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-5-room-4",
    name: "Fiesta King Loft",
    description:
      "Experience our futuristic, luxurious king loft with a pleasant outlook, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
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
      "Ironing Facilities",
      "Seating Area",
      "Luggage Rack",
    ],
    pricePerNight: 159,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
];
