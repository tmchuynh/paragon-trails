import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-6-room-5-Double-GardenView",
    name: "Signature Double Studio",
    description: "Signature-themed double studio where you can relax in a natural oasis, designed for ultimate comfort and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 69886,
    currency: "ARS",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Twin-OceanView",
    name: "Modern Twin Suite",
    description: "A vintage twin retreat with the sound of the ocean as your backdrop, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 69935,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-buenos-aires-6-room-5-SofaBed-CityView",
    name: "Tranquility Sofa Bed Apartment",
    description: "Discover the charm of this Tranquility-themed sofa bed apartment, complete with well-proportioned ambiance, stunning where you can watch the city wake up, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 57525,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-buenos-aires-6-room-5-Queen-OceanView",
    name: "Tranquility Queen Villa",
    description: "This airy queen accommodation offers with a view of the ocean's horizon, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 85037,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
