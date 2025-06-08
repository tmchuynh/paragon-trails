import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Bamboo Horizon Resort
export const bambooHorizonResortRooms: RoomOption[] = [
  {
    id: "hotel-mto-wa-mbu-village-1-room-0-Single-None",
    name: "Standard Single Loft",
    description: "Unwind in this gentle single loft with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 362717,
    currency: "TZS",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-mto-wa-mbu-village-1-room-0-Twin-OceanView",
    name: "Tranquility Twin Penthouse",
    description: "A cozy twin retreat with a view of the ocean's horizon, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 592833,
    currency: "TZS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-mto-wa-mbu-village-1-room-0-SofaBed-GardenView",
    name: "Signature Sofa Bed Villa",
    description: "Signature-themed villa with indulgent decor, surrounded by vibrant flora, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 532741,
    currency: "TZS",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-mto-wa-mbu-village-1-room-0-Double-None",
    name: "Horizon Double Loft",
    description: "A sumptuous double retreat with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 505040,
    currency: "TZS",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
