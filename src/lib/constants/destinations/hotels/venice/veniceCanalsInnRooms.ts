import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Venice Canals Inn
export const veniceCanalsInnRooms: RoomOption[] = [
  {
    id: "hotel-venice-14-room-13-Single-MountainView",
    name: "Classic Single Apartment",
    description: "Experience our sophisticated, minimalist single apartment where you can gaze at the towering peaks, with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 78,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-venice-14-room-13-SofaBed-None",
    name: "Harmony Sofa Bed Penthouse",
    description: "Discover the charm of this Harmony-themed sofa bed penthouse, complete with expansive ambiance, stunning with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 74,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-venice-14-room-13-Double-OceanView",
    name: "Modern Double Apartment",
    description: "Modern-themed double apartment with breathtaking sea views, featuring tasteful Mediterranean touches and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 112,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-venice-14-room-13-Queen-MountainView",
    name: "Superior Queen Villa",
    description: "A wide-ranging queen villa designed for tasteful comfort, with with a view of the mountains' changing seasons and including climate control for your comfort, reflecting inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 122,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
