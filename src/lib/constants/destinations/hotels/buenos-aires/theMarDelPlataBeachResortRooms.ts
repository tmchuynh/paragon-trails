import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Mar del Plata Beach Resort
export const theMarDelPlataBeachResortRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-4-room-3-Single-None",
    name: "Superior Single Penthouse",
    description: "Our pleasant Superior-themed penthouse offers with a pleasant outlook, relaxing comfort, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 42975,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-buenos-aires-4-room-3-Single-GardenView",
    name: "Superior Single Room",
    description: "Relax in our soft majestic single room featuring with a view of tranquil water features, along with featuring a curated minibar selection and decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 48016,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-buenos-aires-4-room-3-Double-GardenView",
    name: "Horizon Double Apartment",
    description: "A roomy double retreat overlooking lush garden landscapes, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 56382,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-buenos-aires-4-room-3-Queen-None",
    name: "Serenity Queen Apartment",
    description: "Unwind in this gentle queen apartment with a pleasant outlook, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 62668,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
