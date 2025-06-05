import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-kiel-6-room-5",
    name: "Executive Double Suite",
    description: "Indulge in the upscale atmosphere of our double suite, with spectacular featuring a blend of modern and historic architecture, featuring thoughtful design elements, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Outdoor Furniture", "Ironing Facilities", "Streaming Services"],
    pricePerNight: 206,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-kiel-6-room-5",
    name: "Tranquility Sofa Bed Penthouse",
    description: "A comfortable sofa bed penthouse designed for vintage comfort, with where mountains paint the horizon and with carefully selected furnishings, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Jacuzzi Tub", "Soundproofing"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 235,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-kiel-6-room-5",
    name: "Serenity Sofa Bed Penthouse",
    description: "Relax in our bohemian sophisticated sofa bed penthouse featuring where you can enjoy the tranquility of nature, along with with a luxurious soaking tub and decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Mini Bar", "Refrigerator"],
    pricePerNight: 226,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
