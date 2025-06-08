import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Gothenburg Grand
export const gothenburgGrandRooms: RoomOption[] = [
  {
    id: "hotel-stockholm-12-room-11-SofaBed-None",
    name: "Harmony Sofa Bed Apartment",
    description: "A relaxing sofa bed retreat with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 20773,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-stockholm-12-room-11-SofaBed-CityView",
    name: "Modern Sofa Bed Villa",
    description: "A soothing sofa bed villa designed for modern comfort, with featuring a blend of modern and historic architecture and equipped with all the modern conveniences, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 20852,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-stockholm-12-room-11-Twin-OceanView",
    name: "Superior Twin Room",
    description: "Step into a pleasant twin room that combines Superior-themed with breathtaking where the horizon meets the ocean, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 29060,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-stockholm-12-room-11-Twin-CityView",
    name: "Classic Twin Room",
    description: "A broad twin retreat where the city comes alive at dusk, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 20784,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
