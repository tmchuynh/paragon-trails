import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-5-room-4",
    name: "Modern King Room",
    description: "Modern-themed king room with a view of the city's cultural landmarks, decorated with local artistic influences and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Streaming Services", "Bluetooth Speaker", "Accessible Room", "Refrigerator"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 184,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
