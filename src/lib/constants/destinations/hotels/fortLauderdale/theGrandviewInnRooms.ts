import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-5-room-4",
    name: "Modern Queen Loft",
    description: "Modern-themed loft with sophisticated decor, with a view of iconic landmarks, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Bluetooth Speaker", "Fireplace", "Seating Area", "Streaming Services", "Mini Bar"],
    pricePerNight: 204,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
