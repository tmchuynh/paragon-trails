import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-roatan-1-room-0",
    name: "Caribe Twin Loft",
    description: "Caribe-themed loft with soothing decor, where the city comes alive at dusk, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Refrigerator", "Books", "Blackout Curtains", "Streaming Services"],
    pricePerNight: 86,
    currency: "HNL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-roatan-1-room-0",
    name: "Lenca Twin Loft",
    description: "Discover the charm of this Lenca-themed twin loft, complete with opulent ambiance, stunning where you can feel the ocean breeze, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Books", "Ironing Facilities", "Pet Friendly", "Refrigerator"],
    pricePerNight: 117,
    currency: "HNL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
