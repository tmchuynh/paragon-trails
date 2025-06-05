import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-charleston-5-room-4",
    name: "Standard King Penthouse",
    description:
      "A soft king retreat with a pleasant outlook, offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Balcony",
      "In-Room Safe",
      "Ironing Facilities",
      "Wake-Up Service",
      "Fitness Equipment",
      "Blackout Curtains",
    ],
    pricePerNight: 239,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
