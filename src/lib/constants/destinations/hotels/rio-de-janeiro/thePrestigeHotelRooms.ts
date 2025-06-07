import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-10-room-9-Twin-OceanView",
    name: "Serenity Twin Villa",
    description: "Discover the charm of this Serenity-themed twin villa, complete with broad ambiance, stunning with breathtaking sea views, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 917,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-rio-de-janeiro-10-room-9-Single-None",
    name: "Classic Single Villa",
    description: "Our compact Classic-themed villa offers with a pleasant outlook, stretching comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 721,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-rio-de-janeiro-10-room-9-SofaBed-CityView",
    name: "Deluxe Sofa Bed Room",
    description: "Experience our soft, fashionable sofa bed room where you can enjoy the city's energy, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 889,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-rio-de-janeiro-10-room-9-King-None",
    name: "Superior King Penthouse",
    description: "Step into a large-scale king penthouse that combines Superior-themed with breathtaking with a pleasant outlook, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 1184,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
