import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-2-room-1",
    name: "Superior King Suite",
    description: "Our restful Superior-themed suite offers where city lights twinkle at night, elegant comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Family Room", "Refrigerator", "Soundproofing"],
    accessibilityFeatures: ["Elevator", "Visual Aids"],
    pricePerNight: 328,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
