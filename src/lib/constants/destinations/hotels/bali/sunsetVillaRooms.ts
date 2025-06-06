import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-bali-4-room-3",
    name: "Luxury Queen Villa",
    description: "This classic queen villa promises featuring a blend of modern and historic architecture, enriched by Luxury-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Accessible Room", "Books", "Refrigerator"],
    pricePerNight: 214,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
