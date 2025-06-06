import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Puerto Varas Lakeside Hotel
export const puertoVarasLakesideHotelRooms: RoomOption[] = [
  {
    id: "hotel-santiago-3-room-2-SofaBed-GardenView",
    name: "Standard Sofa Bed Penthouse",
    description: "A avant-garde sofa bed penthouse designed for comfy comfort, with surrounded by vibrant flora and with a spacious seating area, reflecting blending Andean and coastal influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 155453836,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-santiago-3-room-2-Queen-MountainView",
    name: "Executive Queen Villa",
    description: "A intimate queen villa designed for soft comfort, with where you can enjoy the tranquility of the mountains and with a modern en-suite bathroom, reflecting blending Andean and coastal influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 223466139,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-santiago-3-room-2-Queen-None",
    name: "Signature Queen Villa",
    description: "A regal queen retreat with a pleasant outlook, featuring minimalist and natural decor.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 198008723,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-santiago-3-room-2-Single-GardenView",
    name: "Viña Single Villa",
    description: "Our Viña-themed single villa offers commodious luxury, panoramic where you can enjoy the garden's seasonal blooms, and with carefully selected furnishings, inspired by highlighting the beauty of Chilean landscapes.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 155156741,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-santiago-3-room-2-Double-GardenView",
    name: "Superior Double Studio",
    description: "Experience our comfortable, upscale double studio where you can enjoy the garden's seasonal blooms, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 182774777,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-santiago-3-room-2-King-GardenView",
    name: "Atacama King Villa",
    description: "A soothing king villa designed for sophisticated comfort, with where you can take in the fresh air and complete with a well-appointed bathroom, reflecting highlighting the beauty of Chilean landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 250979723,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
