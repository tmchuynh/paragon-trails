import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lakeview Retreat
export const lakeviewRetreatRooms: RoomOption[] = [
  {
    id: "hotel-montreal-7-room-6",
    name: "Signature Queen Suite",
    description: "Step into a retro queen suite that combines Signature-themed with breathtaking where you can enjoy the tranquility of the mountains, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Kitchenette", "Bluetooth Speaker"],
    pricePerNight: 329,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-montreal-7-room-6",
    name: "Aurora Twin Penthouse",
    description: "Our deluxe Aurora-themed penthouse offers with a pleasant outlook, relaxing comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Board Games", "Fitness Equipment"],
    pricePerNight: 176,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-montreal-7-room-6",
    name: "Rockies Single Apartment",
    description: "Discover the charm of this Rockies-themed single apartment, complete with elegant ambiance, stunning overlooking the vibrant cityscape, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Smoke Detector", "Fireplace"],
    pricePerNight: 181,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-montreal-7-room-6",
    name: "Premium Single Loft",
    description: "Premium-themed single loft where the ocean meets the sky, with cozy, nature-inspired themes and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Seating Area", "Smoke Detector", "Pet Friendly", "Streaming Services", "Wake-Up Service"],
    pricePerNight: 223,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
