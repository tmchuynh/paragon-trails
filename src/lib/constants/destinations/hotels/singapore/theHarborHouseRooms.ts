import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-singapore-2-room-1",
    name: "Lion City King Apartment",
    description: "Lion City-themed apartment with comfy decor, with a view of colorful flower beds, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Board Games", "Bathtub", "Fitness Equipment", "Flat-Screen TV"],
    pricePerNight: 273,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
