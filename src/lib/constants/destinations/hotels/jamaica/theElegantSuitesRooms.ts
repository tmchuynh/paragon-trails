import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Elegant Suites
export const theElegantSuitesRooms: RoomOption[] = [
  {
    id: "hotel-jamaica-10-room-9-King-GardenView",
    name: "Premium King Penthouse",
    description: "Premium-themed king penthouse with serene garden views, decorated with local artistic influences and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 3686474,
    currency: "JMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-jamaica-10-room-9-Single-GardenView",
    name: "Classic Single Villa",
    description: "A industrial single retreat with a view of the garden's natural beauty, featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 2378570,
    currency: "JMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-jamaica-10-room-9-SofaBed-None",
    name: "Luxury Sofa Bed Loft",
    description: "Discover the charm of this Luxury-themed sofa bed loft, complete with sleek ambiance, stunning with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 2151293,
    currency: "JMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-jamaica-10-room-9-Twin-CityView",
    name: "Signature Twin Loft",
    description: "Experience our lavish, restful twin loft where you can enjoy the city's energy, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 2340967,
    currency: "JMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
