import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-kiel-4-room-3-King-GardenView",
    name: "Tranquility King Penthouse",
    description: "Enjoy a majestic stay in our Tranquility-themed king penthouse, offering featuring a peaceful garden setting, with a luxurious soaking tub, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 133,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-kiel-4-room-3-Double-MountainView",
    name: "Executive Double Studio",
    description: "Relax in our spacious retro double studio featuring where you can experience the beauty of nature, along with featuring premium bath amenities and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 107,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-kiel-4-room-3-Single-MountainView",
    name: "Luxury Single Studio",
    description: "Discover the charm of this Luxury-themed single studio, complete with sleek ambiance, stunning with panoramic views of the surrounding mountains, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 85,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-kiel-4-room-3-SofaBed-None",
    name: "Horizon Sofa Bed Suite",
    description: "Discover the charm of this Horizon-themed sofa bed suite, complete with vast ambiance, stunning with a pleasant outlook, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 73,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
