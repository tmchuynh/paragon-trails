import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Jasper Park Lodge
export const jasperParkLodgeRooms: RoomOption[] = [
  {
    id: "hotel-toronto-8-room-7-SofaBed-OceanView",
    name: "Classic Sofa Bed Apartment",
    description: "Our Classic-themed sofa bed apartment offers pleasant luxury, panoramic with breathtaking sea views, and with high-speed internet access, inspired by blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 319,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-toronto-8-room-7-Queen-None",
    name: "Luxury Queen Penthouse",
    description: "Luxury-themed penthouse with contemporary decor, with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 298,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-toronto-8-room-7-SofaBed-None",
    name: "Aurora Sofa Bed Room",
    description: "A voluminous sofa bed retreat with a pleasant outlook, with cozy, nature-inspired themes.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 220,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-toronto-8-room-7-Queen-CityView",
    name: "Signature Queen Studio",
    description: "Step into a soothing queen studio that combines Signature-themed with breathtaking where the city comes alive at dusk, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 333,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
