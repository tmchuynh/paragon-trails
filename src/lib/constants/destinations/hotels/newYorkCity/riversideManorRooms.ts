import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-new-york-city-5-room-4",
    name: "Luxury Double Suite",
    description: "Our ornate Luxury-themed suite offers where you can feel the ocean breeze, commodious comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Flat-Screen TV", "Bluetooth Speaker", "Balcony", "In-Room Safe"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 126,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-new-york-city-5-room-4",
    name: "Modern Double Penthouse",
    description: "Our Modern-themed double penthouse offers rustic luxury, panoramic with a pleasant outlook, and with carefully selected furnishings, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Ironing Facilities", "In-Room Safe", "Refrigerator", "Bathtub"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 100,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
