import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Jyväskylä Forest Inn
export const jyvskylForestInnRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-2-room-1-Double-None",
    name: "Premium Double Loft",
    description: "Enjoy a elegant stay in our Premium-themed double loft, offering with a pleasant outlook, with carefully selected furnishings, and unique touches of with a cozy and comfortable atmosphere inspired by Finnish nature.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 92,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-helsinki-2-room-1-Twin-CityView",
    name: "Superior Twin Room",
    description: "Experience our soft, generous twin room where the city comes alive at dusk, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 84,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-helsinki-2-room-1-Queen-MountainView",
    name: "Premium Queen Penthouse",
    description: "Premium-themed penthouse with expansive decor, with a view of the mountains' natural beauty, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 125,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-helsinki-2-room-1-Queen-OceanView",
    name: "Luxury Queen Penthouse",
    description: "Step into a avant-garde queen penthouse that combines Luxury-themed with breathtaking with a view of the tranquil sea, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 122,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-helsinki-2-room-1-Queen-None",
    name: "Forest Queen Room",
    description: "This grandiose queen accommodation offers with a pleasant outlook, with a cozy and comfortable atmosphere inspired by Finnish nature.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 93,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-helsinki-2-room-1-SofaBed-None",
    name: "Premium Sofa Bed Studio",
    description: "Our Premium-themed sofa bed studio offers opulent luxury, panoramic with a pleasant outlook, and offering a unique blend of style and comfort, inspired by with a cozy and comfortable atmosphere inspired by Finnish nature.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Accessible Bathroom", "Hearing Support", "Visual Aids"],
    pricePerNight: 84,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-helsinki-2-room-1-Single-OceanView",
    name: "Lake Single Studio",
    description: "Experience our voluminous, vast single studio where the horizon meets the ocean, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible", "Accessible Bathroom"],
    pricePerNight: 88,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-helsinki-2-room-1-Twin-MountainView",
    name: "Aurora Twin Loft",
    description: "Step into a stylish twin loft that combines Aurora-themed with breathtaking with a view of the mountains' changing seasons, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 104,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-helsinki-2-room-1-SofaBed-OceanView",
    name: "Sauna Sofa Bed Apartment",
    description: "A well-proportioned sofa bed retreat with a view of the tranquil sea, blending Scandinavian style with modern amenities.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 100,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
