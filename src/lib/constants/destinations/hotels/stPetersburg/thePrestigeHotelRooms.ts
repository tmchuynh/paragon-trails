import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-3-room-2",
    name: "Harmony King Penthouse",
    description:
      "Enjoy a contemporary stay in our Harmony-themed king penthouse, offering with a pleasant outlook, featuring a curated minibar selection, and unique touches of decorated with local artistic influences.",
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
      "In-Room Safe",
      "Sauna",
      "Connecting Rooms",
      "Luggage Rack",
      "Bathtub",
      "Outdoor Furniture",
    ],
    pricePerNight: 219,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
];
