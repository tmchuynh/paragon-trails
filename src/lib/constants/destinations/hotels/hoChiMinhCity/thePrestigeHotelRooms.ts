import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-1-room-0",
    name: "Serenity Single Room",
    description: "This wide-ranging single accommodation offers where you can gaze at the towering peaks, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Soundproofing", "In-Room Safe"],
    accessibilityFeatures: ["Elevator", "Accessible Bathroom"],
    pricePerNight: 80,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
