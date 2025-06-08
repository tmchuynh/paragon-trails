import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Valencia Grand
export const theValenciaGrandRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-1-room-0-Twin-None",
    name: "Premium Twin Apartment",
    description: "Premium-themed twin apartment with a pleasant outlook, designed for ultimate comfort and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 164,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-barcelona-1-room-0-SofaBed-OceanView",
    name: "Standard Sofa Bed Villa",
    description: "Standard-themed villa with grandiose decor, where you can relax to the sound of the waves, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 195,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-barcelona-1-room-0-Queen-None",
    name: "Serenity Queen Studio",
    description: "Unwind in this opulent queen studio with a pleasant outlook, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 205,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-barcelona-1-room-0-SofaBed-None",
    name: "Classic Sofa Bed Studio",
    description: "Classic-themed sofa bed studio with a pleasant outlook, decorated with local artistic influences and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Accessible Bathroom", "Elevator"],
    pricePerNight: 150,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
