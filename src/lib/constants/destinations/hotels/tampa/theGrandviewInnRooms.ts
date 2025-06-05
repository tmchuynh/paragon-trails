import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-tampa-4-room-3",
    name: "Manhattan King Apartment",
    description: "Manhattan-themed apartment with contemporary decor, with a view of the mountains' breathtaking sunsets, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Kitchenette", "Mini Bar", "Refrigerator"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 158,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-tampa-4-room-3",
    name: "Deluxe Twin Penthouse",
    description: "Our minimalist Deluxe-themed penthouse offers where you can enjoy the garden's seasonal blooms, avant-garde comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Luggage Rack", "Refrigerator", "Pet Friendly", "Accessible Room", "Fireplace"],
    pricePerNight: 91,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-tampa-4-room-3",
    name: "Heritage Queen Penthouse",
    description: "Unwind in this majestic queen penthouse with a pleasant outlook, with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Bluetooth Speaker", "Outdoor Furniture", "Sauna"],
    pricePerNight: 103,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
