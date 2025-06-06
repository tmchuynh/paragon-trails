import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pixie Hollow Suites
export const pixieHollowSuitesRooms: RoomOption[] = [
  {
    id: "hotel-juneau-1-room-0-SofaBed-None",
    name: "Luxury Sofa Bed Room",
    description: "Experience our avant-garde, calming sofa bed room with a pleasant outlook, with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 94,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-juneau-1-room-0-Single-None",
    name: "Signature Single Penthouse",
    description: "This rustic single accommodation offers with a pleasant outlook, with rustic and modern influences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 87,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-juneau-1-room-0-Double-MountainView",
    name: "Pioneer Double Room",
    description: "Unwind in this voluminous double room with a view of the mountains' lush valleys, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 115,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-juneau-1-room-0-SofaBed-GardenView",
    name: "Executive Sofa Bed Apartment",
    description: "Executive-themed sofa bed apartment with a view of the garden's vibrant colors, highlighting contemporary American style and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 93,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-juneau-1-room-0-Single-MountainView",
    name: "Manhattan Single Apartment",
    description: "Enjoy a vintage stay in our Manhattan-themed single apartment, offering featuring awe-inspiring mountain scenery, with a spacious work area, and unique touches of offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 100,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
