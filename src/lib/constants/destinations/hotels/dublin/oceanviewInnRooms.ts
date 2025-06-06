import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-dublin-5-room-4",
    name: "Classic Sofa Bed Apartment",
    description: "This sophisticated sofa bed accommodation offers with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Streaming Services", "Accessible Room", "Connecting Rooms", "Bathtub"],
    pricePerNight: 167,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-dublin-5-room-4",
    name: "Executive Sofa Bed Penthouse",
    description: "Relax in our artistic intimate sofa bed penthouse featuring featuring a blend of modern and historic architecture, along with offering a unique blend of style and comfort and decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Luggage Rack", "Mini Bar", "Streaming Services"],
    accessibilityFeatures: ["Wheelchair Accessible", "Hearing Support"],
    pricePerNight: 187,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-dublin-5-room-4",
    name: "Signature Twin Apartment",
    description: "Signature-themed apartment with artistic decor, with a backdrop of city parks and green spaces, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Family Room", "Refrigerator", "Streaming Services", "Luggage Rack"],
    pricePerNight: 176,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
