import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-4-room-3",
    name: "Classic King Room",
    description: "Relax in our extravagant futuristic king room featuring featuring uninterrupted ocean vistas, along with featuring a curated minibar selection and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Luggage Rack", "Balcony"],
    pricePerNight: 216,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-dubrovnik-4-room-3",
    name: "Deluxe Twin Suite",
    description: "Unwind in this elegant twin suite where the horizon meets the ocean, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Mini Bar", "Fitness Equipment", "In-Room Safe", "Fireplace"],
    pricePerNight: 135,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
