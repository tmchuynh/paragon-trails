import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-3-room-2",
    name: "Modern King Suite",
    description: "A regal king retreat where you can enjoy the city's energy, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Blackout Curtains", "Bluetooth Speaker", "Refrigerator", "Dining Table", "Pet Friendly"],
    pricePerNight: 297,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
