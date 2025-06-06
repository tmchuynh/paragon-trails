import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-buenos-aires-4-room-3",
    name: "Modern Double Villa",
    description: "Experience our classic, opulent double villa where you can enjoy stunning sunsets over the water, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Dining Table", "Sauna"],
    pricePerNight: 319,
    currency: "ARS",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-buenos-aires-4-room-3",
    name: "Horizon Double Suite",
    description: "This cozy double suite promises with a pleasant outlook, enriched by Horizon-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Accessible Room", "Blackout Curtains", "Books", "Sauna"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 243,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-buenos-aires-4-room-3",
    name: "Classic King Apartment",
    description: "Classic-themed apartment with sumptuous decor, where you can enjoy the garden's peaceful atmosphere, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Bathtub", "Bluetooth Speaker", "Dining Table", "Flat-Screen TV"],
    pricePerNight: 395,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-buenos-aires-4-room-3",
    name: "Tranquility Queen Villa",
    description: "A palatial queen retreat where you can experience the beauty of nature, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Balcony", "Accessible Room"],
    pricePerNight: 393,
    currency: "ARS",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
