import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-sitka-3-room-2",
    name: "Heritage Sofa Bed Loft",
    description: "Our Heritage-themed sofa bed loft offers stretching luxury, panoramic with a view of the garden's lush greenery, and with plush bedding for ultimate comfort, inspired by featuring sleek urban design elements.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Mini Bar", "Pet Friendly", "Bluetooth Speaker", "Books"],
    pricePerNight: 115,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-sitka-3-room-2",
    name: "Liberty Sofa Bed Penthouse",
    description: "Experience our palatial, airy sofa bed penthouse where you can gaze at the towering peaks, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Sauna", "Seating Area"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 125,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-sitka-3-room-2",
    name: "Premium Queen Apartment",
    description: "Our gentle Premium-themed apartment offers where you can watch the city wake up, intimate comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Streaming Services", "Soundproofing"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 162,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
