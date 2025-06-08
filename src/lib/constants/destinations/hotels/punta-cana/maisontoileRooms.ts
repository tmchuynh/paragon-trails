import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Maison Étoile
export const maisontoileRooms: RoomOption[] = [
  {
    id: "hotel-punta-cana-5-room-4-Queen-CityView",
    name: "Luxury Queen Loft",
    description: "A avant-garde queen loft designed for comfortable comfort, with featuring a blend of modern and historic architecture and with a spacious work area, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 18503,
    currency: "DOP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-punta-cana-5-room-4-Double-None",
    name: "Serenity Double Studio",
    description: "Our Serenity-themed double studio offers upscale luxury, panoramic with a pleasant outlook, and with blackout curtains for a perfect night's sleep, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 13567,
    currency: "DOP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-punta-cana-5-room-4-Twin-MountainView",
    name: "Tranquility Twin Studio",
    description: "Our Tranquility-themed twin studio offers intimate luxury, panoramic where you can enjoy the serenity of mountain life, and complete with a well-appointed bathroom, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 16463,
    currency: "DOP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-punta-cana-5-room-4-Single-GardenView",
    name: "Serenity Single Villa",
    description: "This deluxe single accommodation offers with serene garden views, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 12152,
    currency: "DOP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
