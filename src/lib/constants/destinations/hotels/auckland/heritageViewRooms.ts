import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-auckland-1-room-0",
    name: "Kiwi Single Room",
    description: "Unwind in this sophisticated single room with a view of colorful flower beds, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Wake-Up Service", "Flat-Screen TV"],
    pricePerNight: 168,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-auckland-1-room-0",
    name: "Deluxe Double Studio",
    description: "Our Deluxe-themed double studio offers sizable luxury, panoramic where you can enjoy the mountains' majestic presence, and featuring premium bath amenities, inspired by showcasing the serene beauty of New Zealand landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Mini Bar", "Fireplace", "Fitness Equipment", "Refrigerator"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 241,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
