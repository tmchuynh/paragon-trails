import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Quebec City Inn
export const quebecCityInnRooms: RoomOption[] = [
  {
    id: "hotel-toronto-7-room-6-Single-GardenView",
    name: "Maple Single Loft",
    description: "A retro single retreat with a view of the garden's natural beauty, blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 359,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-toronto-7-room-6-Double-None",
    name: "Deluxe Double Loft",
    description: "Our wide-ranging Deluxe-themed loft offers with a pleasant outlook, extravagant comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 360,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-toronto-7-room-6-King-GardenView",
    name: "Frontier King Villa",
    description: "This avant-garde king villa promises where you can enjoy the garden's seasonal blooms, enriched by Frontier-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 638,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-toronto-7-room-6-Single-MountainView",
    name: "Northern Lights Single Suite",
    description: "A elegant single retreat where you can enjoy the mountains' majestic presence, blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 406,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
