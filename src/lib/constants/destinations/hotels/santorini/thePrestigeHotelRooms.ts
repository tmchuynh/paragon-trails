import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-santorini-4-room-3",
    name: "Serenity Double Penthouse",
    description: "Discover the charm of this Serenity-themed double penthouse, complete with compact ambiance, stunning with a backdrop of city parks and green spaces, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Blackout Curtains", "Refrigerator"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 104,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-santorini-4-room-3",
    name: "Horizon King Loft",
    description: "Unwind in this prestigious king loft where you can experience the beauty of nature, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Mini Bar", "Soundproofing", "Seating Area"],
    pricePerNight: 175,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
