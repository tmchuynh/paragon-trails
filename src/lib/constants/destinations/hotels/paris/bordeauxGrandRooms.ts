import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Bordeaux Grand
export const bordeauxGrandRooms: RoomOption[] = [
  {
    id: "hotel-paris-10-room-9-Double-None",
    name: "Serenity Double Studio",
    description: "Unwind in this spacious double studio with a pleasant outlook, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 277,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-paris-10-room-9-King-None",
    name: "Harmony King Room",
    description: "Unwind in this lavish king room with a pleasant outlook, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 401,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-paris-10-room-9-Queen-OceanView",
    name: "Serenity Queen Loft",
    description: "Indulge in the palatial atmosphere of our queen loft, with spectacular with a view of the endless blue, featuring chic Parisian-inspired decor, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 445,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-paris-10-room-9-Twin-OceanView",
    name: "Harmony Twin Suite",
    description: "Discover the charm of this Harmony-themed twin suite, complete with grandiose ambiance, stunning with a view of the tranquil sea, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 335,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
