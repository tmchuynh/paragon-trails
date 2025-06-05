import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-milan-3-room-2",
    name: "Horizon King Studio",
    description: "A vintage king retreat with a backdrop of city parks and green spaces, offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Blackout Curtains", "Fitness Equipment", "Outdoor Furniture", "Connecting Rooms"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 138,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
