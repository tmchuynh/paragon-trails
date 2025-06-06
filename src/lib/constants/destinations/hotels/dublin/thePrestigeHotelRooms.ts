import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-dublin-3-room-2",
    name: "Classic Queen Studio",
    description: "This vintage queen accommodation offers where the horizon meets the ocean, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "In-Room Safe", "Seating Area", "Family Room", "Streaming Services", "Books"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 326,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-dublin-3-room-2",
    name: "Modern Single Penthouse",
    description: "Discover the charm of this Modern-themed single penthouse, complete with upscale ambiance, stunning where you can experience the beauty of nature, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Accessible Room", "Blackout Curtains", "Flat-Screen TV", "Fireplace"],
    pricePerNight: 179,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
