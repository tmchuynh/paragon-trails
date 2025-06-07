import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Corfu Ionian View
export const corfuIonianViewRooms: RoomOption[] = [
  {
    id: "hotel-santorini-5-room-4-SofaBed-CityView",
    name: "Olive Sofa Bed Penthouse",
    description: "Our Olive-themed sofa bed penthouse offers elegant luxury, panoramic featuring a blend of modern and historic architecture, and with a spacious work area, inspired by featuring Aegean-inspired decor with blue and white tones.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 79,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-santorini-5-room-4-SofaBed-None",
    name: "Executive Sofa Bed Studio",
    description: "Executive-themed studio with bohemian decor, with a pleasant outlook, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 81,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-santorini-5-room-4-Queen-None",
    name: "Deluxe Queen Loft",
    description: "Experience our minimalist, restful queen loft with a pleasant outlook, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 95,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-santorini-5-room-4-Double-None",
    name: "Parthenon Double Loft",
    description: "Our relaxing Parthenon-themed loft offers with a pleasant outlook, vast comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 78,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
