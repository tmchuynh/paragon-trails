import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-montevideo-6-room-5",
    name: "Montevideo Queen Suite",
    description: "Montevideo-themed suite with fashionable decor, where the city comes alive at dusk, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Pet Friendly", "Balcony", "In-Room Safe", "Outdoor Furniture"],
    pricePerNight: 139,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
