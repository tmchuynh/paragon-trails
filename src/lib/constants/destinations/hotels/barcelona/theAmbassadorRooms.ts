import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-1-room-0",
    name: "Harmony King Penthouse",
    description: "A opulent king penthouse designed for large-scale comfort, with overlooking lush garden landscapes and featuring a curated minibar selection, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Mini Bar", "Smoke Detector"],
    pricePerNight: 128,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-barcelona-1-room-0",
    name: "Premium King Suite",
    description: "A wide-ranging king suite designed for well-proportioned comfort, with where you can enjoy stunning sunsets over the water and including climate control for your comfort, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Bathtub", "Flat-Screen TV", "Books", "Balcony"],
    pricePerNight: 133,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
