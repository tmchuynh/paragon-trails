import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lakeview Retreat
export const lakeviewRetreatRooms: RoomOption[] = [
  {
    id: "hotel-montreal-7-room-6",
    name: "Premium Single Loft",
    description: "Indulge in the regal atmosphere of our single loft, with spectacular where you can find inspiration in the mountains, inspired by the rugged beauty of Canadian landscapes, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Books", "Luggage Rack", "Fireplace", "Outdoor Furniture", "Jacuzzi Tub"],
    pricePerNight: 208,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-montreal-7-room-6",
    name: "Frontier Double Loft",
    description: "Indulge in the retro atmosphere of our double loft, with spectacular where you can enjoy the city's energy, with cozy, nature-inspired themes, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Fireplace", "Outdoor Furniture"],
    pricePerNight: 208,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-montreal-7-room-6",
    name: "Timber Queen Villa",
    description: "Step into a intimate queen villa that combines Timber-themed with breathtaking where you can enjoy the city's energy, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Streaming Services", "Luggage Rack", "Connecting Rooms", "Balcony"],
    pricePerNight: 267,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-montreal-7-room-6",
    name: "Rockies Queen Suite",
    description: "A ornate queen retreat with a pleasant outlook, featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Balcony", "Blackout Curtains", "Pet Friendly", "Seating Area", "Board Games"],
    pricePerNight: 242,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
