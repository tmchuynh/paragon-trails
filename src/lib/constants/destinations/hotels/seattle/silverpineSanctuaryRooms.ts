import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Silverpine Sanctuary
export const silverpineSanctuaryRooms: RoomOption[] = [
  {
    id: "hotel-seattle-1-room-0-Queen-CityView",
    name: "Executive Queen Apartment",
    description: "Step into a inviting queen apartment that combines Executive-themed with breathtaking with a backdrop of city parks and green spaces, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 283,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-seattle-1-room-0-Single-None",
    name: "Standard Single Penthouse",
    description: "This modern single penthouse promises with a pleasant outlook, enriched by Standard-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 158,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-seattle-1-room-0-Double-GardenView",
    name: "Heritage Double Penthouse",
    description: "Heritage-themed double penthouse with a view of the garden's peaceful ambiance, featuring sleek urban design elements and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 221,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-seattle-1-room-0-Single-MountainView",
    name: "Pioneer Single Studio",
    description: "A intimate single studio designed for welcoming comfort, with overlooking spectacular mountain ranges and with carefully selected furnishings, reflecting offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 187,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
