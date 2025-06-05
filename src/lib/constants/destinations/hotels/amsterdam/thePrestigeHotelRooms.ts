import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-3-room-2",
    name: "Luxury King Penthouse",
    description: "This industrial king penthouse promises where you can relax in a natural oasis, enriched by Luxury-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Blackout Curtains", "Flat-Screen TV", "Fitness Equipment", "Ironing Facilities"],
    pricePerNight: 333,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
