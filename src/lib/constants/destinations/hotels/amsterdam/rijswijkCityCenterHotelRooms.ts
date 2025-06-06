import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rijswijk City Center Hotel
export const rijswijkCityCenterHotelRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-4-room-3-SofaBed-CityView",
    name: "Deluxe Sofa Bed Suite",
    description: "Our tranquil Deluxe-themed suite offers where the city comes alive at dusk, calming comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 216,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-amsterdam-4-room-3-Double-MountainView",
    name: "Standard Double Penthouse",
    description: "This extravagant double penthouse promises overlooking spectacular mountain ranges, enriched by Standard-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 274,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-amsterdam-4-room-3-Queen-MountainView",
    name: "Deluxe Queen Penthouse",
    description: "A minimalist queen retreat with a view of the mountains' lush valleys, blending minimalist style with comfortable amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids", "Hearing Support"],
    pricePerNight: 342,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-amsterdam-4-room-3-Single-None",
    name: "Rembrandt Single Room",
    description: "Rembrandt-themed single room with a pleasant outlook, blending minimalist style with comfortable amenities and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 153,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-amsterdam-4-room-3-SofaBed-None",
    name: "Premium Sofa Bed Penthouse",
    description: "Our Premium-themed sofa bed penthouse offers ornate luxury, panoramic with a pleasant outlook, and with a spacious work area, inspired by offering a unique Dutch experience with a contemporary twist.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 196,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-amsterdam-4-room-3-Double-OceanView",
    name: "Superior Double Villa",
    description: "This airy double villa promises where the ocean meets the sky, enriched by Superior-themed details and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Visual Aids", "Elevator"],
    pricePerNight: 276,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-amsterdam-4-room-3-King-MountainView",
    name: "Standard King Suite",
    description: "This indulgent king suite promises with a view of the mountains' breathtaking sunsets, enriched by Standard-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 352,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-amsterdam-4-room-3-Double-None",
    name: "Classic Double Villa",
    description: "Unwind in this refreshing double villa with a pleasant outlook, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 227,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
