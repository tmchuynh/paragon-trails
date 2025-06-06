import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Óbidos Medieval Inn
export const bidosMedievalInnRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-4-room-3-Double-MountainView",
    name: "Azulejo Double Studio",
    description: "Step into a serene double studio that combines Azulejo-themed with breathtaking with a view of the mountains' natural beauty, complemented by with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 106,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-lisbon-4-room-3-Double-None",
    name: "Azulejo Double Loft",
    description: "Azulejo-themed double loft with a pleasant outlook, offering a unique cultural experience with a touch of luxury and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-lisbon-4-room-3-Twin-None",
    name: "Saudade Twin Room",
    description: "Our Saudade-themed twin room offers cozy luxury, panoramic with a pleasant outlook, and including climate control for your comfort, inspired by with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 79,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-lisbon-4-room-3-Twin-OceanView",
    name: "Algarve Twin Suite",
    description: "A sleek twin suite designed for lavish comfort, with with a view of the ocean's changing tides and including climate control for your comfort, reflecting with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 91,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-lisbon-4-room-3-Single-OceanView",
    name: "Standard Single Apartment",
    description: "Unwind in this deluxe single apartment featuring uninterrupted ocean vistas, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 83,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-lisbon-4-room-3-SofaBed-None",
    name: "Superior Sofa Bed Suite",
    description: "Experience our broad, refreshing sofa bed suite with a pleasant outlook, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 72,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-lisbon-4-room-3-Queen-OceanView",
    name: "Algarve Queen Suite",
    description: "A avant-garde queen suite designed for refreshing comfort, with with a view of the endless blue and with blackout curtains for a perfect night's sleep, reflecting offering a unique cultural experience with a touch of luxury.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom"],
    pricePerNight: 125,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
