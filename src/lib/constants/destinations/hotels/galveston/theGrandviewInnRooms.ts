import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-galveston-4-room-3",
    name: "Golden Gate Queen Loft",
    description: "Unwind in this ornate queen loft with a view of iconic landmarks, with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Flat-Screen TV", "Board Games", "Complimentary Bottled Water", "Streaming Services", "Family Room"],
    pricePerNight: 329,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
