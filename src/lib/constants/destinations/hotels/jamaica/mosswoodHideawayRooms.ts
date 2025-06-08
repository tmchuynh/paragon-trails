import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mosswood Hideaway
export const mosswoodHideawayRooms: RoomOption[] = [
  {
    id: "hotel-jamaica-7-room-6-Twin-OceanView",
    name: "Tranquility Twin Apartment",
    description: "Our extravagant Tranquility-themed apartment offers with a view of the ocean's horizon, open-concept comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 6211161,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-jamaica-7-room-6-Single-OceanView",
    name: "Classic Single Room",
    description: "Step into a tasteful single room that combines Classic-themed with breathtaking where you can feel the ocean breeze, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 5416377,
    currency: "JMD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-jamaica-7-room-6-Double-MountainView",
    name: "Tranquility Double Penthouse",
    description: "Relax in our tasteful spacious double penthouse featuring with a view of the mountains' serene beauty, along with with high-speed internet access and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 7330655,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-jamaica-7-room-6-Twin-MountainView",
    name: "Premium Twin Penthouse",
    description: "A avant-garde twin retreat with a view of the mountains' natural beauty, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 6155248,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
