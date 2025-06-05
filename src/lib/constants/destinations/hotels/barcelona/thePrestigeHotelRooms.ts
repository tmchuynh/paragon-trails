import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-2-room-1",
    name: "Harmony King Villa",
    description: "This elegant king villa promises overlooking the vibrant cityscape, enriched by Harmony-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "In-Room Safe", "Board Games", "Soundproofing", "Jacuzzi Tub", "Outdoor Furniture"],
    pricePerNight: 303,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
