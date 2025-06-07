import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-8-room-7-Single-MountainView",
    name: "Modern Single Loft",
    description: "Indulge in the artistic atmosphere of our single loft, with spectacular with a view of the mountains' natural beauty, designed for ultimate comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 83,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-lisbon-8-room-7-Double-GardenView",
    name: "Classic Double Loft",
    description: "Our Classic-themed double loft offers refreshing luxury, panoramic with a view of the garden's natural beauty, and with a modern en-suite bathroom, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-lisbon-8-room-7-Double-OceanView",
    name: "Modern Double Loft",
    description: "Our grandiose Modern-themed loft offers with a view of the ocean's changing tides, roomy comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 115,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-lisbon-8-room-7-Single-GardenView",
    name: "Standard Single Suite",
    description: "Experience our tasteful, well-proportioned single suite where you can enjoy the garden's peaceful atmosphere, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 85,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
