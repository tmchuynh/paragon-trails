import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for La Dolce Vita Inn
export const laDolceVitaInnRooms: RoomOption[] = [
  {
    id: "hotel-rome-1-room-0-SofaBed-MountainView",
    name: "Standard Sofa Bed Loft",
    description: "This room-filled sofa bed loft promises overlooking spectacular mountain ranges, enriched by Standard-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 99,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-rome-1-room-0-Twin-OceanView",
    name: "Executive Twin Suite",
    description: "A sophisticated twin suite designed for grandiose comfort, with where you can relax to the sound of the waves and offering a unique blend of style and comfort, reflecting offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 100,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-rome-1-room-0-Queen-CityView",
    name: "Harmony Queen Room",
    description: "Relax in our grandiose retro queen room featuring where you can enjoy the city's energy, along with with a spacious work area and inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 132,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-rome-1-room-0-Single-GardenView",
    name: "Superior Single Studio",
    description: "A compact single retreat surrounded by vibrant flora, featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 92,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
