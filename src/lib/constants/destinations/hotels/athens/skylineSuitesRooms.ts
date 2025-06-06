import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-athens-2-room-1",
    name: "Superior Sofa Bed Studio",
    description: "Step into a vast sofa bed studio that combines Superior-themed with breathtaking with a pleasant outlook, complemented by with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Wake-Up Service", "Fireplace", "Streaming Services"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 231,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-athens-2-room-1",
    name: "Harmony Sofa Bed Suite",
    description: "A commodious sofa bed suite designed for artistic comfort, with with a view of the mountains' serene beauty and including climate control for your comfort, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Streaming Services", "Mini Bar", "Board Games"],
    pricePerNight: 252,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-athens-2-room-1",
    name: "Harmony Double Studio",
    description: "Harmony-themed studio with tasteful decor, with a pleasant outlook, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Soundproofing", "Books", "Wake-Up Service"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom"],
    pricePerNight: 238,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-athens-2-room-1",
    name: "Superior King Loft",
    description: "Superior-themed loft with bohemian decor, where you can enjoy the city's energy, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Fitness Equipment", "Ironing Facilities", "Books", "Fireplace"],
    pricePerNight: 368,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
