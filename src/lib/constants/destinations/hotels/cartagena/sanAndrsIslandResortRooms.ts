import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for San Andrés Island Resort
export const sanAndrsIslandResortRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-7-room-6-Double-OceanView",
    name: "Standard Double Studio",
    description: "Our Standard-themed double studio offers lavish luxury, panoramic with a view of the sandy beaches, and with carefully selected furnishings, inspired by featuring handcrafted local motifs.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 3125604288,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-cartagena-7-room-6-Queen-OceanView",
    name: "Standard Queen Apartment",
    description: "Standard-themed apartment with soothing decor, with a view of the ocean's changing tides, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 3500053371,
    currency: "COP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-cartagena-7-room-6-SofaBed-CityView",
    name: "Classic Sofa Bed Penthouse",
    description: "Classic-themed penthouse with open-concept decor, with a backdrop of city parks and green spaces, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 2151203976,
    currency: "COP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-cartagena-7-room-6-SofaBed-None",
    name: "Deluxe Sofa Bed Apartment",
    description: "Discover the charm of this Deluxe-themed sofa bed apartment, complete with luxurious ambiance, stunning with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 1921680926,
    currency: "COP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
