import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-1-room-0",
    name: "Horizon Sofa Bed Villa",
    description: "Our Horizon-themed sofa bed villa offers intimate luxury, panoramic with a pleasant outlook, and featuring a curated minibar selection, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Board Games", "Seating Area", "Mini Bar", "In-Room Safe"],
    pricePerNight: 110,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
