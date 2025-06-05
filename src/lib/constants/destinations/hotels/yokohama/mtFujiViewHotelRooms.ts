import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mt. Fuji View Hotel
export const mt.FujiViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-3-room-2",
    name: "Harmony Queen Apartment",
    description: "A welcoming queen retreat with a panoramic view of the coastline, with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Flat-Screen TV", "Streaming Services"],
    pricePerNight: 411,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-yokohama-3-room-2",
    name: "Imperial Single Suite",
    description: "Our eclectic Imperial-themed suite offers with a pleasant outlook, heartwarming comfort, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Dining Table", "Bathtub", "Bluetooth Speaker", "Streaming Services", "Fireplace"],
    pricePerNight: 180,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-yokohama-3-room-2",
    name: "Lotus King Loft",
    description: "Unwind in this intimate king loft where you can enjoy the serenity of mountain life, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Bathtub", "Mini Bar", "Family Room"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 434,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
