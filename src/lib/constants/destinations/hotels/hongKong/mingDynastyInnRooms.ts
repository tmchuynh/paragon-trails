import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Ming Dynasty Inn
export const mingDynastyInnRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-5-room-4",
    name: "Modern Twin Suite",
    description: "This tranquil twin accommodation offers with a view of the mountains' natural beauty, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Dining Table", "Balcony", "Luggage Rack", "Streaming Services"],
    pricePerNight: 220,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-hong-kong-5-room-4",
    name: "Superior Single Loft",
    description: "A broad single retreat surrounded by vibrant flora, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Bathtub", "Kitchenette"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 190,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-hong-kong-5-room-4",
    name: "Classic Double Room",
    description: "Relax in our refreshing tasteful double room featuring with a pleasant outlook, along with offering a unique blend of style and comfort and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Dining Table", "Smoke Detector", "Soundproofing"],
    pricePerNight: 188,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
