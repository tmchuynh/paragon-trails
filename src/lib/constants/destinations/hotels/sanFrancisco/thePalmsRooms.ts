import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-5-room-4",
    name: "Harmony Sofa Bed Penthouse",
    description: "Experience our cozy, extravagant sofa bed penthouse with a view of the mountains' rugged terrain, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Balcony", "Pet Friendly", "Wake-Up Service", "Blackout Curtains"],
    pricePerNight: 147,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
