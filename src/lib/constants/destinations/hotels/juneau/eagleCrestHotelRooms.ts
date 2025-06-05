import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-juneau-1-room-0",
    name: "Golden Gate King Villa",
    description:
      "Step into a lavish king villa that combines Golden Gate-themed with breathtaking overlooking the vibrant cityscape, complemented by with a spacious work area.",
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
      "Mini Bar",
      "Complimentary Bottled Water",
      "Accessible Room",
    ],
    pricePerNight: 288,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
];
