import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-10-room-9-SofaBed-None",
    name: "Harmony Sofa Bed Room",
    description: "Our Harmony-themed sofa bed room offers pleasant luxury, panoramic with a pleasant outlook, and featuring premium bath amenities, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 98,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-fort-lauderdale-10-room-9-Twin-CityView",
    name: "Luxury Twin Suite",
    description: "Discover the charm of this Luxury-themed twin suite, complete with classic ambiance, stunning with a front-row seat to the city's heartbeat, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 111,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-fort-lauderdale-10-room-9-King-GardenView",
    name: "Tranquility King Studio",
    description: "Our Tranquility-themed king studio offers fashionable luxury, panoramic with a view of the garden's vibrant colors, and equipped with all the modern conveniences, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 202,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-fort-lauderdale-10-room-9-Double-None",
    name: "Standard Double Room",
    description: "A exquisite double retreat with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 118,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
