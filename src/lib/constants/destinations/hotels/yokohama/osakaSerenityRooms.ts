import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Osaka Serenity
export const osakaSerenityRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-5-room-4",
    name: "Zen Double Loft",
    description: "Unwind in this soft double loft with a view of the city's waterfront, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Mini Bar", "Flat-Screen TV", "Outdoor Furniture", "Books", "Pet Friendly"],
    pricePerNight: 100,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
