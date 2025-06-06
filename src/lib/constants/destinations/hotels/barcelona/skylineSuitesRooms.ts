import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-3-room-2",
    name: "Serenity Twin Penthouse",
    description: "This peaceful twin accommodation offers with a pleasant outlook, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Streaming Services", "Balcony", "Outdoor Furniture", "Connecting Rooms"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 89,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
