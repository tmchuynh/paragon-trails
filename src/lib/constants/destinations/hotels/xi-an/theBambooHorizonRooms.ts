import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Bamboo Horizon
export const theBambooHorizonRooms: RoomOption[] = [
  {
    id: "hotel-xi-an-3-room-2-Twin-GardenView",
    name: "Classic Twin Penthouse",
    description: "A ample twin retreat where you can relax in a garden haven, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 809,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-xi-an-3-room-2-SofaBed-GardenView",
    name: "Executive Sofa Bed Room",
    description: "A sleek sofa bed retreat overlooking lush garden landscapes, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 811,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-xi-an-3-room-2-Double-OceanView",
    name: "Luxury Double Room",
    description: "A room-filled double room designed for elegant comfort, with where you can enjoy the ocean's beauty and with a spacious work area, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 1016,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-xi-an-3-room-2-Double-CityView",
    name: "Serenity Double Villa",
    description: "A plush double villa designed for minimalist comfort, with with a window to the bustling city below and equipped with all the modern conveniences, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 970,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
