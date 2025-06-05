import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-3-room-2",
    name: "Modern King Studio",
    description: "Modern-themed studio with refreshing decor, where you can enjoy stunning sunsets over the water, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Fitness Equipment", "Luggage Rack", "Dining Table"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 358,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
