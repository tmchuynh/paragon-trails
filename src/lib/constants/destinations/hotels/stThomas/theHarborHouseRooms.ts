import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-1-room-0",
    name: "Premium Single Apartment",
    description: "Discover the charm of this Premium-themed single apartment, complete with calming ambiance, stunning with a backdrop of city parks and green spaces, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Ironing Facilities", "Wake-Up Service", "Fitness Equipment", "Bathtub"],
    pricePerNight: 193,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-st-thomas-1-room-0",
    name: "Tranquility Single Villa",
    description: "Tranquility-themed villa with traditional decor, with a view of the tranquil sea, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Pet Friendly"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 241,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
