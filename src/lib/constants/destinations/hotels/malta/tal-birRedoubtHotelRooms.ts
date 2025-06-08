import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Tal-Bir Redoubt Hotel
export const talbirRedoubtHotelRooms: RoomOption[] = [
  {
    id: "hotel-malta-4-room-3-King-GardenView",
    name: "Deluxe King Loft",
    description: "Enjoy a refined stay in our Deluxe-themed king loft, offering where you can enjoy the garden's seasonal blooms, featuring a curated minibar selection, and unique touches of featuring Mediterranean-inspired decor with local artisanal touches.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 304,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-malta-4-room-3-SofaBed-None",
    name: "Executive Sofa Bed Studio",
    description: "Executive-themed sofa bed studio with a pleasant outlook, with a blend of historic charm and modern amenities and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 184,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-malta-4-room-3-Queen-OceanView",
    name: "Azure Window Queen Suite",
    description: "This minimalist queen suite promises with the sound of the ocean as your backdrop, enriched by Azure Window-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 306,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-malta-4-room-3-Queen-CityView",
    name: "Luxury Queen Studio",
    description: "A ornate queen retreat with a view of the city's waterfront, blending traditional Maltese style with contemporary design.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Visual Aids", "Hearing Support", "Accessible Bathroom"],
    pricePerNight: 273,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
