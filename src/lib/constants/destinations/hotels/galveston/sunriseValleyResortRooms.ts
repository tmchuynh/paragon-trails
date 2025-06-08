import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunrise Valley Resort
export const sunriseValleyResortRooms: RoomOption[] = [
  {
    id: "hotel-galveston-6-room-5-SofaBed-CityView",
    name: "Signature Sofa Bed Studio",
    description: "Signature-themed sofa bed studio where you can enjoy the city's energy, highlighting contemporary American style and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 203,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-galveston-6-room-5-Queen-None",
    name: "Standard Queen Apartment",
    description: "This tranquil queen apartment promises with a pleasant outlook, enriched by Standard-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 250,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-galveston-6-room-5-King-None",
    name: "Colonial King Loft",
    description: "A contemporary king loft designed for tasteful comfort, with with a pleasant outlook and featuring premium bath amenities, reflecting with rustic and modern influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 296,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-galveston-6-room-5-Double-CityView",
    name: "Liberty Double Apartment",
    description: "This cozy double apartment promises where the city comes alive at dusk, enriched by Liberty-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 240,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
