import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Velvet Lantern
export const theVelvetLanternRooms: RoomOption[] = [
  {
    id: "hotel-chefchaouen-2-room-1-King-OceanView",
    name: "Modern King Room",
    description: "Our well-proportioned Modern-themed room offers with a view of the endless blue, avant-garde comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 37351,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-chefchaouen-2-room-1-Double-GardenView",
    name: "Horizon Double Room",
    description: "Our stylish Horizon-themed room offers with a view of the garden's seasonal changes, sophisticated comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 22776,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-chefchaouen-2-room-1-Single-MountainView",
    name: "Luxury Single Loft",
    description: "A eclectic single loft designed for sleek comfort, with with a view of the mountains' rugged terrain and with a private balcony or terrace, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 21885,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-chefchaouen-2-room-1-Single-None",
    name: "Harmony Single Apartment",
    description: "Unwind in this sleek single apartment with a pleasant outlook, with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 16400,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
