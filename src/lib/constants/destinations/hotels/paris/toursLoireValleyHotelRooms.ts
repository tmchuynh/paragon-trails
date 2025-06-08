import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Tours Loire Valley Hotel
export const toursLoireValleyHotelRooms: RoomOption[] = [
  {
    id: "hotel-paris-4-room-3-Double-OceanView",
    name: "Premium Double Studio",
    description: "Premium-themed studio with prestigious decor, with the sound of the ocean as your backdrop, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 203,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-paris-4-room-3-Twin-None",
    name: "Tranquility Twin Villa",
    description: "Experience our refreshing, relaxing twin villa with a pleasant outlook, with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 149,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-paris-4-room-3-King-MountainView",
    name: "Harmony King Loft",
    description: "Harmony-themed loft with vintage decor, with a view of the mountains' breathtaking sunsets, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 331,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-paris-4-room-3-Twin-CityView",
    name: "Harmony Twin Loft",
    description: "Experience our restful, exquisite twin loft featuring a blend of modern and historic architecture, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 168,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
