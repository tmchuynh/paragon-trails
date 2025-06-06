import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Crimson Pines
export const theCrimsonPinesRooms: RoomOption[] = [
  {
    id: "hotel-sitka-1-room-0-King-None",
    name: "Executive King Apartment",
    description: "Our Executive-themed king apartment offers avant-garde luxury, panoramic with a pleasant outlook, and offering a unique blend of style and comfort, inspired by highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 236,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-sitka-1-room-0-Queen-MountainView",
    name: "Manhattan Queen Loft",
    description: "Manhattan-themed queen loft where you can escape to the mountains, highlighting contemporary American style and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 290,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-sitka-1-room-0-SofaBed-None",
    name: "Premium Sofa Bed Apartment",
    description: "Premium-themed apartment with ornate decor, with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 148,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-sitka-1-room-0-Single-None",
    name: "Signature Single Apartment",
    description: "Indulge in the contemporary atmosphere of our single apartment, with spectacular with a pleasant outlook, highlighting contemporary American style, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 155,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-sitka-1-room-0-Queen-None",
    name: "Luxury Queen Studio",
    description: "Discover the charm of this Luxury-themed queen studio, complete with refreshing ambiance, stunning with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 210,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-sitka-1-room-0-Twin-OceanView",
    name: "Liberty Twin Apartment",
    description: "Unwind in this stylish twin apartment with a panoramic view of the coastline, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 229,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-sitka-1-room-0-SofaBed-OceanView",
    name: "Manhattan Sofa Bed Penthouse",
    description: "Relax in our large-scale well-proportioned sofa bed penthouse featuring with a view of the ocean's changing tides, along with equipped with all the modern conveniences and with rustic and modern influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 228,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-sitka-1-room-0-Double-OceanView",
    name: "Colonial Double Loft",
    description: "Indulge in the cozy atmosphere of our double loft, with spectacular with breathtaking sea views, featuring sleek urban design elements, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 222,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
