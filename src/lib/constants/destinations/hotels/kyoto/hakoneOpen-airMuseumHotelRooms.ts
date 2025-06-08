import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hakone Open-Air Museum Hotel
export const hakoneOpenairMuseumHotelRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-8-room-7-Twin-None",
    name: "Executive Twin Apartment",
    description: "This broad twin accommodation offers with a pleasant outlook, with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 4143059,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-kyoto-8-room-7-King-None",
    name: "Premium King Room",
    description: "A comfy king room designed for artistic comfort, with with a pleasant outlook and equipped with all the modern conveniences, reflecting featuring traditional tatami elements.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 6897254,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-kyoto-8-room-7-King-CityView",
    name: "Deluxe King Suite",
    description: "Discover the charm of this Deluxe-themed king suite, complete with intimate ambiance, stunning offering panoramic city vistas, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 6363160,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-kyoto-8-room-7-SofaBed-None",
    name: "Standard Sofa Bed Penthouse",
    description: "A deluxe sofa bed penthouse designed for upscale comfort, with with a pleasant outlook and including climate control for your comfort, reflecting with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Visual Aids", "Wheelchair Accessible", "Elevator"],
    pricePerNight: 4056592,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
