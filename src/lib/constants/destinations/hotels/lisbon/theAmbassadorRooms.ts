import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-1-room-0",
    name: "Luxury King Studio",
    description: "This voluminous king studio promises where you can relax in a natural oasis, enriched by Luxury-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Mini Bar", "Connecting Rooms"],
    pricePerNight: 415,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
