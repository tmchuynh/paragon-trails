import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-2-room-1",
    name: "Deluxe Twin Apartment",
    description: "Deluxe-themed apartment with room-filled decor, featuring a blend of modern and historic architecture, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Bluetooth Speaker", "Refrigerator"],
    pricePerNight: 245,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-ketchikan-2-room-1",
    name: "Liberty Twin Studio",
    description: "Our stretching Liberty-themed studio offers overlooking the sparkling ocean waves, gentle comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Pet Friendly", "Flat-Screen TV"],
    pricePerNight: 309,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
