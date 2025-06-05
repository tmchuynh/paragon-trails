import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-bali-3-room-2",
    name: "Island Breeze Double Loft",
    description: "This tranquil double loft promises where you can enjoy stunning sunsets over the water, enriched by Island Breeze-themed details and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Bathtub", "Bluetooth Speaker"],
    pricePerNight: 247,
    currency: "IDR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
