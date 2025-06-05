import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-florence-3-room-2",
    name: "Modern Queen Loft",
    description: "Unwind in this vintage queen loft with a window to the bustling city below, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Board Games", "In-Room Safe", "Fireplace", "Flat-Screen TV"],
    pricePerNight: 127,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
