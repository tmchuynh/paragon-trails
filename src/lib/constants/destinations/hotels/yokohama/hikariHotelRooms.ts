import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hikari Hotel
export const hikariHotelRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-1-room-0",
    name: "Zen Single Penthouse",
    description: "This heartwarming single penthouse promises overlooking spectacular mountain ranges, enriched by Zen-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Ironing Facilities", "Outdoor Furniture", "In-Room Safe", "Soundproofing", "Accessible Room"],
    pricePerNight: 333,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
