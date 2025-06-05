import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-2-room-1",
    name: "Timber Single Penthouse",
    description: "Enjoy a welcoming stay in our Timber-themed single penthouse, offering with a pleasant outlook, complete with a well-appointed bathroom, and unique touches of blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Books", "Mini Bar"],
    pricePerNight: 173,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-vancouver-2-room-1",
    name: "Signature Single Room",
    description: "Enjoy a well-proportioned stay in our Signature-themed single room, offering with a view of the mountains' changing seasons, with a spacious seating area, and unique touches of inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Accessible Room", "Dining Table", "Books", "Seating Area", "Smoke Detector"],
    pricePerNight: 194,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-vancouver-2-room-1",
    name: "Deluxe Double Penthouse",
    description: "Indulge in the eclectic atmosphere of our double penthouse, with spectacular with stunning views of the city skyline, inspired by the rugged beauty of Canadian landscapes, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Connecting Rooms", "Board Games", "Mini Bar", "Books", "Outdoor Furniture"],
    pricePerNight: 236,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-vancouver-2-room-1",
    name: "Maple Double Penthouse",
    description: "A relaxing double penthouse designed for contemporary comfort, with where you can enjoy the ocean's beauty and with high-speed internet access, reflecting blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Seating Area", "Bathtub"],
    pricePerNight: 260,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
