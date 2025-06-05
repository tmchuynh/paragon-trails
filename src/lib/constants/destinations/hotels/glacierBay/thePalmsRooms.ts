import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-3-room-2",
    name: "Tranquility Double Studio",
    description: "Discover the charm of this Tranquility-themed double studio, complete with comfy ambiance, stunning with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Books", "Fitness Equipment", "Smoke Detector"],
    pricePerNight: 146,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-glacier-bay-3-room-2",
    name: "Classic Double Studio",
    description: "Unwind in this modern double studio where the city skyline meets the horizon, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Flat-Screen TV", "Streaming Services", "Smoke Detector"],
    pricePerNight: 140,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
