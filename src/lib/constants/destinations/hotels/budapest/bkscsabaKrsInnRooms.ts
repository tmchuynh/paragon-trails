import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Békéscsaba Körös Inn
export const bkscsabaKrsInnRooms: RoomOption[] = [
  {
    id: "hotel-budapest-9-room-8-Double-None",
    name: "Tranquility Double Room",
    description: "Tranquility-themed double room with a pleasant outlook, decorated with local artistic influences and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 17140467,
    currency: "HUF",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-budapest-9-room-8-Queen-GardenView",
    name: "Luxury Queen Suite",
    description: "Our refined Luxury-themed suite offers with a view of colorful flower beds, stretching comfort, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 23672280,
    currency: "HUF",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-budapest-9-room-8-King-GardenView",
    name: "Signature King Loft",
    description: "A traditional king retreat with a view of the garden's peaceful ambiance, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 23301367,
    currency: "HUF",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-budapest-9-room-8-Queen-MountainView",
    name: "Signature Queen Penthouse",
    description: "Experience our room-filled, palatial queen penthouse where you can enjoy the peace of the highlands, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Elevator", "Visual Aids", "Wheelchair Accessible"],
    pricePerNight: 22911451,
    currency: "HUF",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
