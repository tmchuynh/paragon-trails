import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Barossa Valley Hotel
export const barossaValleyHotelRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-10-room-9-Queen-CityView",
    name: "Standard Queen Penthouse",
    description: "A sleek queen retreat offering panoramic city vistas, with coastal and Outback influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 353,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-melbourne-10-room-9-Double-None",
    name: "Deluxe Double Room",
    description: "Relax in our lavish prestigious double room featuring with a pleasant outlook, along with offering a unique blend of style and comfort and blending natural textures with modern style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 287,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-melbourne-10-room-9-Single-MountainView",
    name: "Sunburnt Single Loft",
    description: "This broad single loft promises with a view of the mountains' changing seasons, enriched by Sunburnt-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 240,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-melbourne-10-room-9-Single-CityView",
    name: "Premium Single Villa",
    description: "Our Premium-themed single villa offers extensive luxury, panoramic with stunning views of the city skyline, and with high-speed internet access, inspired by with coastal and Outback influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 243,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
