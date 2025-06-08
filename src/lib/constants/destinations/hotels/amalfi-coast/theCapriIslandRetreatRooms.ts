import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Capri Island Retreat
export const theCapriIslandRetreatRooms: RoomOption[] = [
  {
    id: "hotel-amalfi-coast-2-room-1-Double-None",
    name: "Deluxe Double Room",
    description: "Our roomy Deluxe-themed room offers with a pleasant outlook, intimate comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 202,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-amalfi-coast-2-room-1-King-OceanView",
    name: "Deluxe King Villa",
    description: "A ornate king villa designed for classic comfort, with with a view of the sandy beaches and with carefully selected furnishings, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 385,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-amalfi-coast-2-room-1-Single-None",
    name: "Modern Single Villa",
    description: "Our Modern-themed single villa offers serene luxury, panoramic with a pleasant outlook, and complete with a well-appointed bathroom, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 186,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-amalfi-coast-2-room-1-King-GardenView",
    name: "Premium King Loft",
    description: "Step into a homey king loft that combines Premium-themed with breathtaking surrounded by vibrant flora, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 392,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
