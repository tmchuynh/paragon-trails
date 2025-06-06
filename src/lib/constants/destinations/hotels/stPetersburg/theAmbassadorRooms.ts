import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-2-room-1",
    name: "Premium Queen Room",
    description:
      "Relax in our generous luxurious queen room featuring with serene garden views, along with offering a unique blend of style and comfort and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
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
      "Dining Table",
      "Connecting Rooms",
      "Bluetooth Speaker",
      "Wake-Up Service",
      "Family Room",
    ],
    pricePerNight: 93,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
