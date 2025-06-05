import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-florence-1-room-0",
    name: "Modern Double Suite",
    description: "Our Modern-themed double suite offers calming luxury, panoramic with a view of the city's cultural landmarks, and with a spacious work area, inspired by featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Bathtub", "Mini Bar", "Smoke Detector", "Fitness Equipment"],
    pricePerNight: 109,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-florence-1-room-0",
    name: "Horizon King Room",
    description: "Our Horizon-themed king room offers broad luxury, panoramic with a panoramic view of the coastline, and with a spacious seating area, inspired by offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Fireplace", "Accessible Room", "Board Games", "Balcony", "Bluetooth Speaker"],
    pricePerNight: 186,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-florence-1-room-0",
    name: "Classic King Room",
    description: "Classic-themed room with calming decor, overlooking the vibrant cityscape, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Streaming Services", "Balcony", "Soundproofing", "Kitchenette"],
    pricePerNight: 155,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
