import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Pampas Plains Hotel
export const thePampasPlainsHotelRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-4-room-3-Queen-None",
    name: "Horizon Queen Room",
    description: "Our modern Horizon-themed room offers with a pleasant outlook, refreshing comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 27313,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-buenos-aires-4-room-3-Twin-None",
    name: "Classic Twin Loft",
    description: "Unwind in this expansive twin loft with a pleasant outlook, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 24741,
    currency: "ARS",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-buenos-aires-4-room-3-SofaBed-MountainView",
    name: "Classic Sofa Bed Suite",
    description: "Indulge in the bohemian atmosphere of our sofa bed suite, with spectacular with a view of snow-capped peaks, decorated with local artistic influences, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 27491,
    currency: "ARS",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-buenos-aires-4-room-3-Double-None",
    name: "Superior Double Apartment",
    description: "This cozy double accommodation offers with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 25005,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
