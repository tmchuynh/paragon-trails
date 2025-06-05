import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-montevideo-3-room-2",
    name: "Gaucho King Suite",
    description: "This prestigious king suite promises where you can relax in a natural oasis, enriched by Gaucho-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Soundproofing", "Luggage Rack", "Family Room"],
    pricePerNight: 343,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-montevideo-3-room-2",
    name: "Gaucho King Suite",
    description: "Our bohemian Gaucho-themed suite offers where you can relax to the sound of the waves, tasteful comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Soundproofing", "Refrigerator"],
    pricePerNight: 358,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
