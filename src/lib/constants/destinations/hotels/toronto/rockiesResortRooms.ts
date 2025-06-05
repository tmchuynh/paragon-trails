import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rockies Resort
export const rockiesResortRooms: RoomOption[] = [
  {
    id: "hotel-toronto-4-room-3",
    name: "Frontier Single Studio",
    description: "This palatial single accommodation offers with a pleasant outlook, featuring warm wood and stone accents.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Kitchenette", "Flat-Screen TV", "Bluetooth Speaker", "Ironing Facilities"],
    pricePerNight: 169,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-toronto-4-room-3",
    name: "Maple King Penthouse",
    description: "Maple-themed penthouse with cozy decor, with a view of the sandy beaches, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Kitchenette", "Bathtub"],
    pricePerNight: 385,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
