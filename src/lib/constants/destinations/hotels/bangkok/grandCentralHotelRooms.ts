import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-8-room-7-Queen-CityView",
    name: "Tropical Queen Studio",
    description: "Discover the charm of this Tropical-themed queen studio, complete with welcoming ambiance, stunning offering panoramic city vistas, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 334559,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bangkok-8-room-7-SofaBed-GardenView",
    name: "Premium Sofa Bed Apartment",
    description: "Our palatial Premium-themed apartment offers with a view of the garden's tranquil pathways, comfy comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 315437,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-bangkok-8-room-7-Single-None",
    name: "Standard Single Villa",
    description: "Indulge in the vast atmosphere of our single villa, with spectacular with a pleasant outlook, blending Thai elegance with modern comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 204457,
    currency: "THB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-bangkok-8-room-7-SofaBed-CityView",
    name: "Siam Sofa Bed Penthouse",
    description: "Unwind in this chic sofa bed penthouse with a window to the bustling city below, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 284123,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
