import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Mexico City Heritage Inn
export const theMexicoCityHeritageInnRooms: RoomOption[] = [
  {
    id: "hotel-mexico-city-3-room-2-Queen-OceanView",
    name: "Harmony Queen Villa",
    description: "This soothing queen villa promises with a view of the ocean's changing tides, enriched by Harmony-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 3128,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-mexico-city-3-room-2-Single-None",
    name: "Horizon Single Room",
    description: "Our lavish Horizon-themed room offers with a pleasant outlook, roomy comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 1892,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-mexico-city-3-room-2-Double-CityView",
    name: "Serenity Double Penthouse",
    description: "Enjoy a modern stay in our Serenity-themed double penthouse, offering with a front-row seat to the city's heartbeat, offering a unique blend of style and comfort, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 2343,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-mexico-city-3-room-2-Double-OceanView",
    name: "Executive Double Apartment",
    description: "Executive-themed apartment with roomy decor, where you can feel the ocean breeze, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 2706,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
