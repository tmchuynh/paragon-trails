import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-malta-4-room-3",
    name: "Tranquility Single Loft",
    description: "Our Tranquility-themed single loft offers elegant luxury, panoramic with a pleasant outlook, and equipped with all the modern conveniences, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Fitness Equipment", "Wake-Up Service", "Balcony", "Soundproofing"],
    pricePerNight: 170,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-malta-4-room-3",
    name: "Classic Double Apartment",
    description: "Relax in our ornate majestic double apartment featuring with a pleasant outlook, along with with plush bedding for ultimate comfort and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Streaming Services", "Jacuzzi Tub", "Accessible Room"],
    pricePerNight: 197,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-malta-4-room-3",
    name: "Harmony Twin Apartment",
    description: "Harmony-themed apartment with industrial decor, with a view of the mountains' changing seasons, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Books", "Dining Table", "Jacuzzi Tub"],
    pricePerNight: 239,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
