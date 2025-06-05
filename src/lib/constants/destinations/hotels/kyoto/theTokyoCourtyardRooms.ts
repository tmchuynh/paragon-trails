import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Tokyo Courtyard
export const theTokyoCourtyardRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-6-room-5",
    name: "Luxury Single Penthouse",
    description: "Relax in our cozy comfortable single penthouse featuring with panoramic views of the surrounding mountains, along with with a modern en-suite bathroom and combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Blackout Curtains", "Fireplace", "Bluetooth Speaker", "Flat-Screen TV"],
    pricePerNight: 124,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-kyoto-6-room-5",
    name: "Fuji Double Apartment",
    description: "Our Fuji-themed double apartment offers welcoming luxury, panoramic with a pleasant outlook, and including climate control for your comfort, inspired by combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Smoke Detector", "Complimentary Bottled Water", "In-Room Safe", "Mini Bar"],
    accessibilityFeatures: ["Elevator", "Visual Aids"],
    pricePerNight: 130,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-kyoto-6-room-5",
    name: "Bamboo Double Apartment",
    description: "Bamboo-themed apartment with ornate decor, with a view of the city's waterfront, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Books", "Mini Bar", "Jacuzzi Tub", "Streaming Services"],
    pricePerNight: 132,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-kyoto-6-room-5",
    name: "Standard Queen Loft",
    description: "Standard-themed loft with vast decor, where the city comes alive at dusk, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Refrigerator", "In-Room Safe"],
    pricePerNight: 164,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
