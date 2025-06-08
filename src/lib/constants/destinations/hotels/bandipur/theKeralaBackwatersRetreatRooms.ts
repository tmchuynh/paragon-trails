import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Kerala Backwaters Retreat
export const theKeralaBackwatersRetreatRooms: RoomOption[] = [
  {
    id: "hotel-bandipur-5-room-4-SofaBed-None",
    name: "Deluxe Sofa Bed Penthouse",
    description: "This traditional sofa bed accommodation offers with a pleasant outlook, featuring intricate patterns and rich textiles.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 1330610,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bandipur-5-room-4-Queen-MountainView",
    name: "Deluxe Queen Apartment",
    description: "Deluxe-themed apartment with rustic decor, overlooking spectacular mountain ranges, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 2119480,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bandipur-5-room-4-Double-MountainView",
    name: "Spice Double Room",
    description: "Our Spice-themed double room offers upscale luxury, panoramic where you can find inspiration in the mountains, and including climate control for your comfort, inspired by featuring intricate patterns and rich textiles.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 1694532,
    currency: "INR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-bandipur-5-room-4-Queen-GardenView",
    name: "Spice Queen Penthouse",
    description: "Our cozy Spice-themed penthouse offers with a view of colorful flower beds, soothing comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 1872826,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
