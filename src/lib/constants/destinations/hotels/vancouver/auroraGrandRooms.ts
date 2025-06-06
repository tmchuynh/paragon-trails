import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aurora Grand
export const auroraGrandRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-5-room-4",
    name: "Rockies Single Loft",
    description: "Our retro Rockies-themed loft offers where you can hear the soothing sound of the sea, contemporary comfort, and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Dining Table", "Fireplace", "Outdoor Furniture", "Sauna"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 191,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-vancouver-5-room-4",
    name: "Frontier King Suite",
    description: "Enjoy a artistic stay in our Frontier-themed king suite, offering with a pleasant outlook, with a spacious seating area, and unique touches of with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Fitness Equipment", "Ironing Facilities", "Sauna"],
    pricePerNight: 248,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-vancouver-5-room-4",
    name: "Timber King Room",
    description: "This broad king accommodation offers where you can enjoy the sights and sounds of nature, blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Soundproofing", "Complimentary Bottled Water", "Jacuzzi Tub", "Connecting Rooms", "Mini Bar"],
    pricePerNight: 323,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
