import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The White Rose
export const theWhiteRoseRooms: RoomOption[] = [
  {
    id: "hotel-london-2-room-1",
    name: "Westminster King Loft",
    description: "A chic king retreat with a view of the mountains' changing seasons, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Soundproofing", "Refrigerator", "Bluetooth Speaker", "Fireplace"],
    pricePerNight: 171,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-london-2-room-1",
    name: "Classic King Loft",
    description: "Enjoy a luxurious stay in our Classic-themed king loft, offering where the horizon meets the ocean, with high-speed internet access, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Balcony", "Smoke Detector"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 171,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
