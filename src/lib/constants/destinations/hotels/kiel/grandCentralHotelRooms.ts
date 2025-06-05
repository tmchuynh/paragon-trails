import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-kiel-4-room-3",
    name: "Premium Single Loft",
    description: "A vintage single loft designed for ample comfort, with featuring uninterrupted ocean vistas and with a luxurious soaking tub, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Flat-Screen TV", "Outdoor Furniture", "Streaming Services", "Mini Bar", "Kitchenette"],
    pricePerNight: 105,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-kiel-4-room-3",
    name: "Horizon Double Loft",
    description: "Unwind in this elegant double loft with a pleasant outlook, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Sauna", "Dining Table", "Soundproofing", "Mini Bar"],
    pricePerNight: 104,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
