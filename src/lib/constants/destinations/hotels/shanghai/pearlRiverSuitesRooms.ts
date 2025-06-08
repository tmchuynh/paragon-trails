import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pearl River Suites
export const pearlRiverSuitesRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-13-room-12-Queen-CityView",
    name: "Executive Queen Penthouse",
    description: "Our Executive-themed queen penthouse offers refined luxury, panoramic where the city skyline meets the horizon, and including climate control for your comfort, inspired by with classic Chinese artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 20152,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-shanghai-13-room-12-Single-None",
    name: "Luxury Single Loft",
    description: "Our compact Luxury-themed loft offers with a pleasant outlook, refined comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 11613,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-shanghai-13-room-12-Twin-None",
    name: "Executive Twin Room",
    description: "This sumptuous twin accommodation offers with a pleasant outlook, offering a refined and harmonious ambiance.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 13485,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-shanghai-13-room-12-Queen-None",
    name: "Forbidden Queen Room",
    description: "Forbidden-themed queen room with a pleasant outlook, blending imperial tradition with modern design and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom", "Elevator"],
    pricePerNight: 17890,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
