import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-auckland-4-room-3",
    name: "Signature King Suite",
    description: "Unwind in this comfy king suite with a view of the endless blue, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Kitchenette", "Mini Bar", "Streaming Services"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 353,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
