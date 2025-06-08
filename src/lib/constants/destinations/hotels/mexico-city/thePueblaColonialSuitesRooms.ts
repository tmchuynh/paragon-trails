import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Puebla Colonial Suites
export const thePueblaColonialSuitesRooms: RoomOption[] = [
  {
    id: "hotel-mexico-city-1-room-0-SofaBed-GardenView",
    name: "Executive Sofa Bed Loft",
    description: "Step into a well-proportioned sofa bed loft that combines Executive-themed with breathtaking with a view of the garden's peaceful ambiance, complemented by with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 3194,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-mexico-city-1-room-0-SofaBed-MountainView",
    name: "Horizon Sofa Bed Loft",
    description: "Horizon-themed loft with expansive decor, where you can take in the fresh mountain air, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 3963,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-mexico-city-1-room-0-Double-CityView",
    name: "Premium Double Suite",
    description: "This sophisticated double suite promises featuring a blend of modern and historic architecture, enriched by Premium-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4129,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-mexico-city-1-room-0-Double-GardenView",
    name: "Deluxe Double Loft",
    description: "This traditional double loft promises where you can enjoy the garden's peaceful atmosphere, enriched by Deluxe-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 4279,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
