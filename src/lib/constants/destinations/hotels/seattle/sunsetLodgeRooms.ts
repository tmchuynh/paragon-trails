import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-seattle-1-room-0",
    name: "Golden Gate Single Apartment",
    description: "Golden Gate-themed single apartment where you can feel the ocean breeze, featuring sleek urban design elements and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Balcony", "Streaming Services", "Outdoor Furniture"],
    pricePerNight: 267,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-seattle-1-room-0",
    name: "Classic Sofa Bed Apartment",
    description: "Our room-filled Classic-themed apartment offers featuring a blend of modern and historic architecture, artistic comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Soundproofing", "Complimentary Bottled Water", "In-Room Safe"],
    pricePerNight: 223,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-seattle-1-room-0",
    name: "Manhattan Queen Penthouse",
    description: "Manhattan-themed penthouse with retro decor, with a view of the garden's tranquil pathways, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Books", "Refrigerator", "Streaming Services", "Jacuzzi Tub"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 355,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
