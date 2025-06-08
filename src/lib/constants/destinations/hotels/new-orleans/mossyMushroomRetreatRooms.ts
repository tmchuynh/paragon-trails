import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mossy Mushroom Retreat
export const mossyMushroomRetreatRooms: RoomOption[] = [
  {
    id: "hotel-new-orleans-2-room-1-Twin-CityView",
    name: "Modern Twin Penthouse",
    description: "Indulge in the majestic atmosphere of our twin penthouse, with spectacular where the city comes alive at dusk, decorated with local artistic influences, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 97,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-new-orleans-2-room-1-King-OceanView",
    name: "Premium King Room",
    description: "A ornate king room designed for ornate comfort, with where you can enjoy the ocean's beauty and with a modern en-suite bathroom, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 179,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-new-orleans-2-room-1-King-MountainView",
    name: "Horizon King Penthouse",
    description: "Our Horizon-themed king penthouse offers vintage luxury, panoramic where you can enjoy the serenity of mountain life, and with carefully selected furnishings, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 171,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-new-orleans-2-room-1-Twin-None",
    name: "Serenity Twin Villa",
    description: "Unwind in this opulent twin villa with a pleasant outlook, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 91,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
