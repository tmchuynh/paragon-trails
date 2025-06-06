import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-2-room-1",
    name: "Aurora Single Room",
    description: "Experience our fashionable, opulent single room where you can enjoy the city's energy, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Streaming Services", "Soundproofing"],
    pricePerNight: 186,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-vancouver-2-room-1",
    name: "Aurora Twin Penthouse",
    description: "A bohemian twin penthouse designed for welcoming comfort, with with a view of the city's waterfront and including climate control for your comfort, reflecting featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Complimentary Bottled Water", "Refrigerator", "Wake-Up Service", "Flat-Screen TV", "Blackout Curtains"],
    pricePerNight: 181,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-vancouver-2-room-1",
    name: "Premium Double Suite",
    description: "A extravagant double retreat where the horizon meets the ocean, with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Seating Area", "Mini Bar", "Pet Friendly", "Family Room", "Streaming Services"],
    pricePerNight: 238,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
