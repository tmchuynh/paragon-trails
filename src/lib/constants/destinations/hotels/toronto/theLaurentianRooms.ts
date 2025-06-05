import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Laurentian
export const theLaurentianRooms: RoomOption[] = [
  {
    id: "hotel-toronto-2-room-1",
    name: "Premium Single Studio",
    description: "Experience our majestic, regal single studio where you can watch the city wake up, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Jacuzzi Tub", "Complimentary Bottled Water", "Pet Friendly", "Fitness Equipment", "Books"],
    pricePerNight: 186,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-toronto-2-room-1",
    name: "Frontier Single Studio",
    description: "A stylish single studio designed for well-proportioned comfort, with with a view of the sandy beaches and with blackout curtains for a perfect night's sleep, reflecting featuring warm wood and stone accents.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Mini Bar", "Connecting Rooms", "Luggage Rack", "Blackout Curtains"],
    pricePerNight: 224,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-toronto-2-room-1",
    name: "Rockies King Loft",
    description: "Rockies-themed loft with comfortable decor, with a pleasant outlook, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Ironing Facilities", "Fireplace"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 278,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
