import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Shanghai Grand
export const shanghaiGrandRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-1-room-0",
    name: "Harmony Queen Room",
    description: "This palatial queen accommodation offers with a view of the city's cultural landmarks, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Family Room", "Mini Bar", "Fitness Equipment", "Board Games"],
    pricePerNight: 124,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-hong-kong-1-room-0",
    name: "Executive Double Studio",
    description: "This ample double accommodation offers with panoramic views of the mountain landscape, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Bathtub", "Outdoor Furniture", "Fireplace", "Bluetooth Speaker"],
    pricePerNight: 117,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
