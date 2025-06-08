import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Forestlight Cabins
export const forestlightCabinsRooms: RoomOption[] = [
  {
    id: "hotel-panauti-9-room-8-King-GardenView",
    name: "Premium King Room",
    description: "This restful king room promises with a view of shaded garden paths, enriched by Premium-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 3188471,
    currency: "NPR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-panauti-9-room-8-Twin-OceanView",
    name: "Superior Twin Room",
    description: "Unwind in this compact twin room where you can enjoy the ocean's beauty, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 2536241,
    currency: "NPR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-panauti-9-room-8-Single-None",
    name: "Classic Single Suite",
    description: "Our chic Classic-themed suite offers with a pleasant outlook, upscale comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 1748366,
    currency: "NPR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-panauti-9-room-8-Queen-GardenView",
    name: "Superior Queen Apartment",
    description: "Step into a intimate queen apartment that combines Superior-themed with breathtaking surrounded by vibrant flora, complemented by with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 3020475,
    currency: "NPR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
