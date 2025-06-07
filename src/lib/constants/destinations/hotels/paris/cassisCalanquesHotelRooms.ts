import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Cassis Calanques Hotel
export const cassisCalanquesHotelRooms: RoomOption[] = [
  {
    id: "hotel-paris-5-room-4-Double-CityView",
    name: "Premium Double Loft",
    description: "A regal double loft designed for broad comfort, with where city lights twinkle at night and with carefully selected furnishings, reflecting where elegance meets Parisian style.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-paris-5-room-4-Single-None",
    name: "Tranquility Single Penthouse",
    description: "Tranquility-themed penthouse with vast decor, with a pleasant outlook, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 66,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-paris-5-room-4-SofaBed-OceanView",
    name: "Harmony Sofa Bed Suite",
    description: "Our Harmony-themed sofa bed suite offers stylish luxury, panoramic where you can watch the waves roll in, and with carefully selected furnishings, inspired by with French Provincial charm.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 102,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-paris-5-room-4-King-CityView",
    name: "Premium King Room",
    description: "Premium-themed room with intimate decor, where city lights twinkle at night, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 139,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
