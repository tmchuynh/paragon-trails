import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-new-york-city-1-room-0",
    name: "Signature Double Suite",
    description:
      "Unwind in this regal double suite where you can enjoy the city's energy, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Kitchenette",
      "Mini Bar",
      "Bathtub",
      "Soundproofing",
    ],
    pricePerNight: 252,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
