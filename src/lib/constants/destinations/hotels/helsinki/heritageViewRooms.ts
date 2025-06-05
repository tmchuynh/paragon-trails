import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-4-room-3",
    name: "Harmony King Studio",
    description: "Unwind in this cozy king studio where you can watch the city wake up, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Seating Area", "Blackout Curtains", "Ironing Facilities", "Soundproofing", "In-Room Safe"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 164,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
