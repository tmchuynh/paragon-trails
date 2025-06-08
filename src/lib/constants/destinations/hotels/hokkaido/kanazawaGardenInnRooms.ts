import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kanazawa Garden Inn
export const kanazawaGardenInnRooms: RoomOption[] = [
  {
    id: "hotel-hokkaido-7-room-6-Double-CityView",
    name: "Bamboo Double Suite",
    description: "This soothing double accommodation offers with a view of the city's waterfront, featuring traditional tatami elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 2374176,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-hokkaido-7-room-6-Single-MountainView",
    name: "Standard Single Penthouse",
    description: "A sizable single penthouse designed for comfy comfort, with overlooking spectacular mountain ranges and with a spacious seating area, reflecting featuring traditional tatami elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 2248047,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-hokkaido-7-room-6-King-CityView",
    name: "Harmony King Suite",
    description: "Discover the charm of this Harmony-themed king suite, complete with relaxing ambiance, stunning where you can enjoy the city's energy, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 3602976,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-hokkaido-7-room-6-Double-None",
    name: "Standard Double Apartment",
    description: "Discover the charm of this Standard-themed double apartment, complete with cozy ambiance, stunning with a pleasant outlook, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 2300396,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
