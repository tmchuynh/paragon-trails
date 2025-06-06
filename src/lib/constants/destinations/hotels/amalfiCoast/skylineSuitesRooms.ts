import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-amalfi-coast-4-room-3",
    name: "Executive Single Apartment",
    description: "Indulge in the rustic atmosphere of our single apartment, with spectacular with a pleasant outlook, decorated with local artistic influences, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Dining Table", "Luggage Rack", "Flat-Screen TV", "Wake-Up Service"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 131,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-amalfi-coast-4-room-3",
    name: "Executive Sofa Bed Room",
    description: "A rustic sofa bed room designed for broad comfort, with where you can escape to the mountains and with a private balcony or terrace, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Jacuzzi Tub", "In-Room Safe", "Refrigerator", "Wake-Up Service"],
    pricePerNight: 208,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-amalfi-coast-4-room-3",
    name: "Standard Double Loft",
    description: "Standard-themed double loft overlooking the vibrant cityscape, designed for ultimate comfort and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Accessible Room", "In-Room Safe", "Pet Friendly", "Mini Bar", "Luggage Rack"],
    pricePerNight: 188,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-amalfi-coast-4-room-3",
    name: "Harmony Double Penthouse",
    description: "A plush double retreat with a pleasant outlook, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Balcony", "Smoke Detector", "Connecting Rooms", "Complimentary Bottled Water", "Mini Bar"],
    pricePerNight: 183,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
