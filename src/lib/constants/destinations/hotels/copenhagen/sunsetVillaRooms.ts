import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-copenhagen-2-room-1",
    name: "Horizon Twin Loft",
    description: "This contemporary twin loft promises with a pleasant outlook, enriched by Horizon-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Family Room", "Ironing Facilities", "Soundproofing", "Connecting Rooms", "Seating Area"],
    pricePerNight: 178,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
