import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-3-room-2",
    name: "Serenity Single Villa",
    description: "Step into a refreshing single villa that combines Serenity-themed with breathtaking where you can watch the city wake up, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Dining Table", "Pet Friendly", "Connecting Rooms", "Streaming Services", "In-Room Safe"],
    pricePerNight: 108,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
