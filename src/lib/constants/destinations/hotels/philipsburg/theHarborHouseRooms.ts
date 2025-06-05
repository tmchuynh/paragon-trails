import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Classic Single Villa",
    description: "Relax in our futuristic inviting single villa featuring where you can watch the city wake up, along with complete with a well-appointed bathroom and blending Caribbean warmth with laid-back luxury.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Dining Table", "Sauna", "Flat-Screen TV", "Ironing Facilities"],
    pricePerNight: 87,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Lagoon Sofa Bed Penthouse",
    description: "Relax in our room-filled airy sofa bed penthouse featuring with a view of the sandy beaches, along with with a private balcony or terrace and with tropical and nautical themes.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Soundproofing", "Fireplace", "Bathtub", "Pet Friendly", "Connecting Rooms"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 121,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Seashell Sofa Bed Loft",
    description: "Seashell-themed loft with room-filled decor, with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Refrigerator", "Bathtub", "Pet Friendly"],
    pricePerNight: 82,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Seashell Double Room",
    description: "Our deluxe Seashell-themed room offers overlooking the sparkling ocean waves, indulgent comfort, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Soundproofing", "Outdoor Furniture"],
    pricePerNight: 140,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
