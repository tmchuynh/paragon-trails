import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-montevideo-7-room-6-King-GardenView",
    name: "Atlantic Breeze King Penthouse",
    description: "Step into a deluxe king penthouse that combines Atlantic Breeze-themed with breathtaking with a view of the garden's tranquil pathways, complemented by with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 18101,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-montevideo-7-room-6-SofaBed-None",
    name: "Luxury Sofa Bed Studio",
    description: "Relax in our elegant rustic sofa bed studio featuring with a pleasant outlook, along with including climate control for your comfort and highlighting relaxed South American style.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible", "Hearing Support"],
    pricePerNight: 9152,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-montevideo-7-room-6-Single-OceanView",
    name: "Colonia Single Apartment",
    description: "A extensive single apartment designed for pleasant comfort, with where you can enjoy stunning sunsets over the water and featuring a curated minibar selection, reflecting highlighting relaxed South American style.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 9999,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-montevideo-7-room-6-SofaBed-MountainView",
    name: "Executive Sofa Bed Room",
    description: "Unwind in this modern sofa bed room where you can enjoy the peace of the highlands, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 12423,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
