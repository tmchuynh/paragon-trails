import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The White Rose
export const theWhiteRoseRooms: RoomOption[] = [
  {
    id: "hotel-london-3-room-2",
    name: "Piccadilly King Villa",
    description: "Step into a large-scale king villa that combines Piccadilly-themed with breathtaking with a pleasant outlook, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Books", "Smoke Detector", "Refrigerator", "Bathtub"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom"],
    pricePerNight: 272,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
