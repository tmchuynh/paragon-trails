import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Volga River Suites
export const theVolgaRiverSuitesRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-2-room-1-SofaBed-CityView",
    name: "Classic Sofa Bed Studio",
    description: "Classic-themed studio with extensive decor, where the city comes alive at dusk, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 7577,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-st-petersburg-2-room-1-SofaBed-OceanView",
    name: "Tranquility Sofa Bed Villa",
    description: "A heartwarming sofa bed retreat where you can hear the soothing sound of the sea, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 9882,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-st-petersburg-2-room-1-Twin-MountainView",
    name: "Classic Twin Loft",
    description: "Unwind in this homey twin loft where you can enjoy the tranquility of the mountains, with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 8845,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-st-petersburg-2-room-1-Double-CityView",
    name: "Signature Double Suite",
    description: "Unwind in this intimate double suite with stunning views of the city skyline, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 8488,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
