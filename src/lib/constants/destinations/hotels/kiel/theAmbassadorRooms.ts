import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-kiel-2-room-1-King-OceanView",
    name: "Serenity King Penthouse",
    description: "Our Serenity-themed king penthouse offers plush luxury, panoramic where you can enjoy stunning sunsets over the water, and featuring a curated minibar selection, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 197,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-kiel-2-room-1-King-None",
    name: "Tranquility King Penthouse",
    description: "Our Tranquility-themed king penthouse offers refined luxury, panoramic with a pleasant outlook, and offering a unique blend of style and comfort, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 159,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-kiel-2-room-1-Single-None",
    name: "Luxury Single Suite",
    description: "Our airy Luxury-themed suite offers with a pleasant outlook, heartwarming comfort, and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 95,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-kiel-2-room-1-Single-GardenView",
    name: "Harmony Single Studio",
    description: "Experience our expansive, deluxe single studio overlooking lush garden landscapes, featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 101,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
