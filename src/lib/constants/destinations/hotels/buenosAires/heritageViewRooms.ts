import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-3-room-2",
    name: "Tranquility King Studio",
    description: "This refined king studio promises overlooking the vibrant cityscape, enriched by Tranquility-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "In-Room Safe", "Soundproofing", "Wake-Up Service", "Balcony", "Flat-Screen TV"],
    pricePerNight: 149,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
