import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Frosted Peak Inn
export const frostedPeakInnRooms: RoomOption[] = [
  {
    id: "hotel-taipei-5-room-4-Double-GardenView",
    name: "Standard Double Loft",
    description: "Standard-themed loft with vast decor, with a view of tranquil water features, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 243567,
    currency: "TWD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-taipei-5-room-4-SofaBed-None",
    name: "Horizon Sofa Bed Penthouse",
    description: "Relax in our snug contemporary sofa bed penthouse featuring with a pleasant outlook, along with featuring a curated minibar selection and decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 180363,
    currency: "TWD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-taipei-5-room-4-King-MountainView",
    name: "Premium King Studio",
    description: "Enjoy a soothing stay in our Premium-themed king studio, offering with panoramic views of the surrounding mountains, with a spacious seating area, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 396072,
    currency: "TWD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-taipei-5-room-4-Single-OceanView",
    name: "Signature Single Suite",
    description: "Signature-themed single suite with a view of the ocean's horizon, featuring thoughtful design elements and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 220951,
    currency: "TWD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
