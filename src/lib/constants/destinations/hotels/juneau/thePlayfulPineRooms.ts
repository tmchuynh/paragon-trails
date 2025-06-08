import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Playful Pine
export const thePlayfulPineRooms: RoomOption[] = [
  {
    id: "hotel-juneau-7-room-6-Twin-None",
    name: "Heritage Twin Loft",
    description: "Heritage-themed twin loft with a pleasant outlook, highlighting contemporary American style and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 94,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-juneau-7-room-6-King-None",
    name: "Pioneer King Suite",
    description: "This exquisite king suite promises with a pleasant outlook, enriched by Pioneer-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Visual Aids", "Elevator"],
    pricePerNight: 148,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-juneau-7-room-6-SofaBed-GardenView",
    name: "Classic Sofa Bed Room",
    description: "Discover the charm of this Classic-themed sofa bed room, complete with palatial ambiance, stunning where nature is just outside your window, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 93,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-juneau-7-room-6-Twin-CityView",
    name: "Pioneer Twin Apartment",
    description: "Pioneer-themed apartment with gentle decor, offering panoramic city vistas, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 104,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
