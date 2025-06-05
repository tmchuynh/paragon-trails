import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-santorini-3-room-2",
    name: "Standard King Room",
    description: "Standard-themed king room where you can enjoy the city's energy, featuring thoughtful design elements and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Sauna", "Bluetooth Speaker", "Fireplace"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 369,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
