import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Amber Dunes Hotel
export const theAmberDunesHotelRooms: RoomOption[] = [
  {
    id: "hotel-new-orleans-3-room-2-SofaBed-OceanView",
    name: "Classic Sofa Bed Room",
    description: "Our comfy Classic-themed room offers with the sound of the ocean as your backdrop, serene comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 112,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-new-orleans-3-room-2-Double-CityView",
    name: "Classic Double Penthouse",
    description: "Our Classic-themed double penthouse offers stylish luxury, panoramic offering panoramic city vistas, and equipped with all the modern conveniences, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 105,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-new-orleans-3-room-2-Queen-OceanView",
    name: "Serenity Queen Studio",
    description: "Our refined Serenity-themed studio offers with a view of the tranquil sea, industrial comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 143,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-new-orleans-3-room-2-Single-None",
    name: "Horizon Single Loft",
    description: "This intimate single loft promises with a pleasant outlook, enriched by Horizon-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 86,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-new-orleans-3-room-2-King-CityView",
    name: "Premium King Studio",
    description: "Our Premium-themed king studio offers open-concept luxury, panoramic with a window to the bustling city below, and featuring a curated minibar selection, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 142,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-new-orleans-3-room-2-Twin-None",
    name: "Modern Twin Loft",
    description: "Step into a rustic twin loft that combines Modern-themed with breathtaking with a pleasant outlook, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 83,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-new-orleans-3-room-2-Twin-MountainView",
    name: "Modern Twin Room",
    description: "Enjoy a luxurious stay in our Modern-themed twin room, offering where you can experience the beauty of nature, with a modern en-suite bathroom, and unique touches of decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 111,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
