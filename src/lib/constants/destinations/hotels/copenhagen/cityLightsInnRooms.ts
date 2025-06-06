import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-copenhagen-3-room-2",
    name: "Tranquility Queen Loft",
    description: "Unwind in this gentle queen loft with a view of the garden's peaceful ambiance, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Flat-Screen TV", "Balcony", "Connecting Rooms", "Board Games"],
    pricePerNight: 192,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
