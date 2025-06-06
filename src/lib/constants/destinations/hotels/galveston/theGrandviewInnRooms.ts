import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-galveston-4-room-3",
    name: "Liberty Single Room",
    description: "Enjoy a calming stay in our Liberty-themed single room, offering where you can watch the city wake up, including climate control for your comfort, and unique touches of with rustic and modern influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Pet Friendly", "Ironing Facilities", "Fireplace", "In-Room Safe"],
    pricePerNight: 215,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-galveston-4-room-3",
    name: "Deluxe Double Suite",
    description: "This roomy double suite promises overlooking spectacular mountain ranges, enriched by Deluxe-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Kitchenette", "Mini Bar", "Refrigerator"],
    pricePerNight: 290,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
