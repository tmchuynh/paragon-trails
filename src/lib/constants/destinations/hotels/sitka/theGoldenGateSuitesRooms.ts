import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Golden Gate Suites
export const theGoldenGateSuitesRooms: RoomOption[] = [
  {
    id: "hotel-sitka-1-room-0-Single-MountainView",
    name: "Luxury Single Loft",
    description: "Luxury-themed loft with artistic decor, where you can enjoy the tranquility of the mountains, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 294,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-sitka-1-room-0-Double-None",
    name: "Liberty Double Villa",
    description: "Step into a sophisticated double villa that combines Liberty-themed with breathtaking with a pleasant outlook, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 315,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-sitka-1-room-0-Twin-MountainView",
    name: "Luxury Twin Penthouse",
    description: "This artistic twin accommodation offers with panoramic views of the mountain landscape, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 367,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-sitka-1-room-0-Single-OceanView",
    name: "Colonial Single Suite",
    description: "Our extensive Colonial-themed suite offers where you can hear the soothing sound of the sea, wide-ranging comfort, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 329,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
