import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-4-room-3",
    name: "Horizon Single Suite",
    description: "Horizon-themed suite with contemporary decor, with a view of the ocean's horizon, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Complimentary Bottled Water", "Ironing Facilities", "Board Games"],
    pricePerNight: 203,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-los-angeles-4-room-3",
    name: "Horizon Queen Apartment",
    description: "Our Horizon-themed queen apartment offers tranquil luxury, panoramic with a view of the ocean's horizon, and including climate control for your comfort, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Bluetooth Speaker", "Seating Area", "Board Games"],
    pricePerNight: 283,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
