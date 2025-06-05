import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-4-room-3",
    name: "Standard Queen Room",
    description: "Standard-themed room with restful decor, with a view of the mountains' breathtaking sunsets, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Bluetooth Speaker", "Board Games", "Luggage Rack"],
    pricePerNight: 219,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-amsterdam-4-room-3",
    name: "Tranquility Sofa Bed Studio",
    description: "This comfy sofa bed accommodation offers with a front-row seat to the city's heartbeat, featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Mini Bar", "Smoke Detector"],
    pricePerNight: 140,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
