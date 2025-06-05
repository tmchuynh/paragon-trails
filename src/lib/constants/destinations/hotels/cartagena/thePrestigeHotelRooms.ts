import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-4-room-3",
    name: "Premium Double Studio",
    description: "Discover the charm of this Premium-themed double studio, complete with wide-ranging ambiance, stunning where you can relax in a garden haven, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Blackout Curtains", "Kitchenette", "Board Games"],
    pricePerNight: 300,
    currency: "COP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-cartagena-4-room-3",
    name: "Cartagena Double Room",
    description: "Enjoy a glamorous stay in our Cartagena-themed double room, offering where you can feel the ocean breeze, with a modern en-suite bathroom, and unique touches of featuring handcrafted local motifs.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Connecting Rooms", "Balcony", "Board Games", "Streaming Services"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 312,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
