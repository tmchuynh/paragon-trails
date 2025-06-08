import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Guadalajara Grand
export const theGuadalajaraGrandRooms: RoomOption[] = [
  {
    id: "hotel-mexico-city-9-room-8-Queen-CityView",
    name: "Signature Queen Villa",
    description: "This soft queen accommodation offers where the city skyline meets the horizon, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 2542,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-mexico-city-9-room-8-Twin-None",
    name: "Modern Twin Studio",
    description: "Enjoy a ornate stay in our Modern-themed twin studio, offering with a pleasant outlook, with a spacious work area, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 1872,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-mexico-city-9-room-8-Double-GardenView",
    name: "Serenity Double Studio",
    description: "Relax in our luxurious ample double studio featuring where you can take in the fresh air, along with including climate control for your comfort and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 2205,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-mexico-city-9-room-8-King-OceanView",
    name: "Signature King Apartment",
    description: "A cozy king apartment designed for peaceful comfort, with where you can feel the ocean breeze and with blackout curtains for a perfect night's sleep, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 4061,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
