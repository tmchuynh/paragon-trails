import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-sydney-4-room-3",
    name: "Coral Reef Double Suite",
    description: "Coral Reef-themed suite with large-scale decor, with a view of the city's waterfront, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Soundproofing", "Seating Area", "In-Room Safe"],
    pricePerNight: 207,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-sydney-4-room-3",
    name: "Koala Single Suite",
    description: "This glamorous single accommodation offers with a pleasant outlook, blending natural textures with modern style.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Accessible Room", "Fireplace", "Streaming Services"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 149,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-sydney-4-room-3",
    name: "Outback Sofa Bed Studio",
    description: "Experience our elegant, upscale sofa bed studio where you can enjoy the city's energy, with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Bathtub", "Jacuzzi Tub", "Mini Bar", "Complimentary Bottled Water", "Refrigerator"],
    pricePerNight: 188,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
