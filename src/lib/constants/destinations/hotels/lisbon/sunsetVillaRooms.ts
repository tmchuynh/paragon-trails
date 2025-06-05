import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-3-room-2",
    name: "Deluxe King Loft",
    description: "Deluxe-themed king loft where you can enjoy stunning sunsets over the water, designed for ultimate comfort and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Board Games", "Dining Table", "Connecting Rooms", "Flat-Screen TV", "Mini Bar"],
    pricePerNight: 399,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
