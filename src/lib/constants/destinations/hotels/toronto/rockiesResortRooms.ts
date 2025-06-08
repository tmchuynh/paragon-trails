import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rockies Resort
export const rockiesResortRooms: RoomOption[] = [
  {
    id: "hotel-toronto-16-room-15-Twin-CityView",
    name: "Superior Twin Room",
    description: "This rustic twin room promises featuring a blend of modern and historic architecture, enriched by Superior-themed details and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Bathroom"],
    pricePerNight: 397,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-toronto-16-room-15-SofaBed-None",
    name: "Standard Sofa Bed Studio",
    description: "Indulge in the exquisite atmosphere of our sofa bed studio, with spectacular with a pleasant outlook, inspired by the rugged beauty of Canadian landscapes, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 405,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-toronto-16-room-15-Single-GardenView",
    name: "Signature Single Suite",
    description: "This chic single suite promises with a view of the garden's vibrant colors, enriched by Signature-themed details and with a spacious seating area.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 395,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-toronto-16-room-15-Queen-None",
    name: "Luxury Queen Suite",
    description: "Step into a sumptuous queen suite that combines Luxury-themed with breathtaking with a pleasant outlook, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 516,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
