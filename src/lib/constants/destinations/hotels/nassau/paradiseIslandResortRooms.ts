import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Paradise Island Resort
export const paradiseIslandResortRooms: RoomOption[] = [
  {
    id: "hotel-nassau-2-room-1-Twin-None",
    name: "Tropical Twin Studio",
    description: "A well-proportioned twin retreat with a pleasant outlook, blending island vibes with elegant comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 89,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-nassau-2-room-1-Queen-OceanView",
    name: "Premium Queen Room",
    description: "This intimate queen room promises where you can hear the soothing sound of the sea, enriched by Premium-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 142,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-nassau-2-room-1-SofaBed-OceanView",
    name: "Paradise Sofa Bed Loft",
    description: "This prestigious sofa bed loft promises with a view of the endless blue, enriched by Paradise-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 112,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-nassau-2-room-1-King-CityView",
    name: "Coral King Villa",
    description: "Our grandiose Coral-themed villa offers with stunning views of the city skyline, industrial comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 142,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
