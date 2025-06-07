import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Banff Springs Retreat
export const banffSpringsRetreatRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-5-room-4-Double-None",
    name: "Maple Double Studio",
    description: "Our Maple-themed double studio offers eclectic luxury, panoramic with a pleasant outlook, and featuring a curated minibar selection, inspired by inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 169,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-vancouver-5-room-4-Queen-MountainView",
    name: "Timber Queen Penthouse",
    description: "A spacious queen retreat with a view of the mountains' changing seasons, inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 304,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-vancouver-5-room-4-King-MountainView",
    name: "Superior King Loft",
    description: "Unwind in this relaxing king loft where you can enjoy the tranquility of the mountains, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 318,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-vancouver-5-room-4-SofaBed-MountainView",
    name: "Maple Sofa Bed Suite",
    description: "A sleek sofa bed suite designed for ample comfort, with where you can take in the fresh mountain air and with a modern en-suite bathroom, reflecting featuring warm wood and stone accents.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 208,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
