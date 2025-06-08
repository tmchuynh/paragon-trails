import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mallorca Bay Suites
export const mallorcaBaySuitesRooms: RoomOption[] = [
  {
    id: "hotel-seville-5-room-4-Double-OceanView",
    name: "Tranquility Double Loft",
    description: "Indulge in the sumptuous atmosphere of our double loft, with spectacular where the ocean meets the sky, featuring thoughtful design elements, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 103,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-seville-5-room-4-Single-GardenView",
    name: "Premium Single Apartment",
    description: "Our bohemian Premium-themed apartment offers where you can enjoy the garden's seasonal blooms, room-filled comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 84,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-seville-5-room-4-Single-OceanView",
    name: "Luxury Single Apartment",
    description: "A prestigious single retreat with a view of the endless blue, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 81,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-seville-5-room-4-Double-None",
    name: "Harmony Double Loft",
    description: "Relax in our palatial relaxing double loft featuring with a pleasant outlook, along with complete with a well-appointed bathroom and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 78,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
