import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-6-room-5",
    name: "Premium Single Villa",
    description: "Our elegant Premium-themed villa offers with a pleasant outlook, grandiose comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Soundproofing", "Balcony"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 220,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
