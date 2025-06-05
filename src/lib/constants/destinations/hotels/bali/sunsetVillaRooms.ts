import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-bali-4-room-3",
    name: "Ubud Single Apartment",
    description: "Experience our contemporary, palatial single apartment where the city skyline meets the horizon, with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Mini Bar", "Jacuzzi Tub", "Ironing Facilities", "Outdoor Furniture"],
    pricePerNight: 162,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bali-4-room-3",
    name: "Garuda King Villa",
    description: "This peaceful king villa promises where you can watch the city wake up, enriched by Garuda-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Connecting Rooms", "In-Room Safe"],
    pricePerNight: 261,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bali-4-room-3",
    name: "Volcanic King Room",
    description: "Experience our peaceful, prestigious king room where you can feel the ocean breeze, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Fitness Equipment", "Bluetooth Speaker", "Fireplace"],
    pricePerNight: 315,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
