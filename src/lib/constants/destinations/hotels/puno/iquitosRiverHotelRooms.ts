import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Iquitos River Hotel
export const iquitosRiverHotelRooms: RoomOption[] = [
  {
    id: "hotel-puno-2-room-1-Double-MountainView",
    name: "Executive Double Room",
    description: "Our Executive-themed double room offers soft luxury, panoramic where you can escape to the mountains, and complete with a well-appointed bathroom, inspired by blending rich cultural heritage with comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 4452,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-puno-2-room-1-Double-OceanView",
    name: "Machu Picchu Double Penthouse",
    description: "Our Machu Picchu-themed double penthouse offers palatial luxury, panoramic with a view of the tranquil sea, and including climate control for your comfort, inspired by featuring Andean-inspired patterns and textures.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 4524,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-puno-2-room-1-SofaBed-OceanView",
    name: "Classic Sofa Bed Suite",
    description: "Unwind in this grandiose sofa bed suite where you can relax to the sound of the waves, with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 4309,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-puno-2-room-1-Queen-None",
    name: "Signature Queen Villa",
    description: "Signature-themed villa with refreshing decor, with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 4000,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
