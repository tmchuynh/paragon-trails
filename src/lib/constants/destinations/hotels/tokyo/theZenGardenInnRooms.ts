import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Zen Garden Inn
export const theZenGardenInnRooms: RoomOption[] = [
  {
    id: "hotel-tokyo-1-room-0",
    name: "Sakura Twin Studio",
    description: "Enjoy a modern stay in our Sakura-themed twin studio, offering with a window to the bustling city below, with blackout curtains for a perfect night's sleep, and unique touches of offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Outdoor Furniture", "Books", "Board Games"],
    pricePerNight: 88,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-tokyo-1-room-0",
    name: "Bamboo Sofa Bed Loft",
    description: "Unwind in this homey sofa bed loft overlooking the vibrant cityscape, featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Luggage Rack", "Balcony", "In-Room Safe"],
    pricePerNight: 97,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-tokyo-1-room-0",
    name: "Fuji Queen Suite",
    description: "Our peaceful Fuji-themed suite offers overlooking the sparkling ocean waves, sleek comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Seating Area", "Sauna"],
    accessibilityFeatures: ["Elevator", "Visual Aids"],
    pricePerNight: 157,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
