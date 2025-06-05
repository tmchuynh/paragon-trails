import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-2-room-1",
    name: "Modern King Penthouse",
    description: "This artistic king penthouse promises where mountains paint the horizon, enriched by Modern-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Bluetooth Speaker", "Outdoor Furniture"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 289,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1",
    name: "Tranquility King Villa",
    description: "Enjoy a palatial stay in our Tranquility-themed king villa, offering with a backdrop of city parks and green spaces, with a modern en-suite bathroom, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Blackout Curtains", "Fireplace", "In-Room Safe"],
    pricePerNight: 242,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
