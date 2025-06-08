import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for La Plaza Vieja Suites
export const laPlazaViejaSuitesRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-10-room-9-Double-None",
    name: "Luxury Double Studio",
    description: "A peaceful double retreat with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 285,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-barcelona-10-room-9-Double-CityView",
    name: "Tranquility Double Loft",
    description: "A serene double loft designed for intimate comfort, with with a view of the city's waterfront and with plush bedding for ultimate comfort, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 323,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-barcelona-10-room-9-King-None",
    name: "Modern King Apartment",
    description: "Modern-themed apartment with soft decor, with a pleasant outlook, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 367,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-barcelona-10-room-9-Single-OceanView",
    name: "Standard Single Room",
    description: "This ornate single accommodation offers where you can feel the ocean breeze, designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 318,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
