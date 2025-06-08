import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Steel & Glass House
export const theSteelGlassHouseRooms: RoomOption[] = [
  {
    id: "hotel-monaco-7-room-6-SofaBed-CityView",
    name: "Harmony Sofa Bed Suite",
    description: "This rustic sofa bed suite promises showcasing the urban landscape, enriched by Harmony-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 84,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-monaco-7-room-6-Twin-OceanView",
    name: "Superior Twin Penthouse",
    description: "Unwind in this roomy twin penthouse where you can hear the soothing sound of the sea, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 93,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-monaco-7-room-6-SofaBed-None",
    name: "Signature Sofa Bed Apartment",
    description: "This avant-garde sofa bed accommodation offers with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 71,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-monaco-7-room-6-Twin-None",
    name: "Classic Twin Penthouse",
    description: "Unwind in this sophisticated twin penthouse with a pleasant outlook, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
