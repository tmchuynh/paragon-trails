import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-4-room-3-Single-None",
    name: "Deluxe Single Loft",
    description: "Discover the charm of this Deluxe-themed single loft, complete with restful ambiance, stunning with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 79,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-los-angeles-4-room-3-Queen-MountainView",
    name: "Standard Queen Suite",
    description: "This eclectic queen suite promises where you can enjoy the tranquility of the mountains, enriched by Standard-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 144,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-los-angeles-4-room-3-Twin-None",
    name: "Classic Twin Loft",
    description: "Our Classic-themed twin loft offers traditional luxury, panoramic with a pleasant outlook, and with carefully selected furnishings, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 87,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-los-angeles-4-room-3-Queen-None",
    name: "Modern Queen Suite",
    description: "Step into a cozy queen suite that combines Modern-themed with breathtaking with a pleasant outlook, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 113,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
