import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-auckland-2-room-1",
    name: "Signature Double Room",
    description: "Experience our large-scale, extravagant double room with a view of the mountains' changing seasons, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Soundproofing", "Wake-Up Service"],
    pricePerNight: 265,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-auckland-2-room-1",
    name: "Fern Double Villa",
    description: "Unwind in this rustic double villa overlooking the sparkling ocean waves, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Accessible Room", "Dining Table", "Soundproofing"],
    pricePerNight: 266,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-auckland-2-room-1",
    name: "Bayview Twin Suite",
    description: "Our plush Bayview-themed suite offers with a pleasant outlook, relaxing comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "In-Room Safe", "Mini Bar"],
    pricePerNight: 195,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-auckland-2-room-1",
    name: "Signature Sofa Bed Villa",
    description: "Our fashionable Signature-themed villa offers with a pleasant outlook, plush comfort, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Board Games", "Fitness Equipment", "Outdoor Furniture", "Bluetooth Speaker"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible"],
    pricePerNight: 177,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
