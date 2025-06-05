import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hikari Hotel
export const hikariHotelRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-1-room-0",
    name: "Deluxe Single Loft",
    description: "This expansive single accommodation offers with a view of the garden's tranquil pathways, with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Fireplace", "Bluetooth Speaker", "Mini Bar", "Books"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 288,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
