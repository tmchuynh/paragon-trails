import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-2-room-1",
    name: "Premium Sofa Bed Suite",
    description: "Our open-concept Premium-themed suite offers where you can enjoy the garden's peaceful atmosphere, relaxing comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Outdoor Furniture", "Wake-Up Service", "Bathtub", "Complimentary Bottled Water", "Books"],
    accessibilityFeatures: ["Visual Aids", "Wheelchair Accessible"],
    pricePerNight: 97,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-melbourne-2-room-1",
    name: "Oceanic Sofa Bed Studio",
    description: "This eclectic sofa bed accommodation offers offering panoramic city vistas, with coastal and Outback influences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Bluetooth Speaker", "Fireplace"],
    accessibilityFeatures: ["Accessible Bathroom", "Elevator"],
    pricePerNight: 87,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
