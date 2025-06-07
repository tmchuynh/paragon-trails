import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-oslo-4-room-3-Double-CityView",
    name: "Signature Double Villa",
    description: "Step into a vintage double villa that combines Signature-themed with breathtaking where the city skyline meets the horizon, complemented by with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 13135,
    currency: "NOK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-oslo-4-room-3-Single-GardenView",
    name: "Standard Single Loft",
    description: "Indulge in the refined atmosphere of our single loft, with spectacular with a view of the garden's peaceful ambiance, created with both style and function in mind, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 10153,
    currency: "NOK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-oslo-4-room-3-Double-None",
    name: "Signature Double Studio",
    description: "Unwind in this fashionable double studio with a pleasant outlook, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 10135,
    currency: "NOK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-oslo-4-room-3-Queen-None",
    name: "Premium Queen Penthouse",
    description: "A futuristic queen penthouse designed for serene comfort, with with a pleasant outlook and offering a unique blend of style and comfort, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 12197,
    currency: "NOK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
