import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mercure St. Martin Marina
export const mercureStMartinMarinaRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-4-room-3-Single-CityView",
    name: "Superior Single Apartment",
    description: "Step into a refreshing single apartment that combines Superior-themed with breathtaking with a view of the city's waterfront, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 261,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-philipsburg-4-room-3-Twin-None",
    name: "Standard Twin Suite",
    description: "Relax in our soothing eclectic twin suite featuring with a pleasant outlook, along with with a luxurious soaking tub and featuring bright, cheerful decor.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Elevator", "Hearing Support", "Visual Aids"],
    pricePerNight: 320,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-philipsburg-4-room-3-Double-None",
    name: "Lagoon Double Room",
    description: "Discover the charm of this Lagoon-themed double room, complete with cozy ambiance, stunning with a pleasant outlook, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 348,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-philipsburg-4-room-3-Queen-CityView",
    name: "Tropical Sky Queen Suite",
    description: "This open-concept queen suite promises with a backdrop of city parks and green spaces, enriched by Tropical Sky-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 464,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
