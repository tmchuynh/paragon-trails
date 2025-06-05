import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-george-town-2-room-1",
    name: "Horizon Twin Room",
    description: "Our grandiose Horizon-themed room offers overlooking spectacular mountain ranges, minimalist comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Fireplace", "Mini Bar", "Fitness Equipment", "Soundproofing", "Refrigerator"],
    pricePerNight: 117,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-george-town-2-room-1",
    name: "Horizon Twin Apartment",
    description: "Discover the charm of this Horizon-themed twin apartment, complete with sleek ambiance, stunning showcasing the urban landscape, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "In-Room Safe", "Books", "Outdoor Furniture"],
    pricePerNight: 99,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
