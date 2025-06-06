import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Golden Gate Suites
export const theGoldenGateSuitesRooms: RoomOption[] = [
  {
    id: "hotel-charleston-3-room-2-King-CityView",
    name: "Premium King Apartment",
    description: "Premium-themed apartment with opulent decor, where the city comes alive at dusk, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 372,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-charleston-3-room-2-Double-MountainView",
    name: "Standard Double Loft",
    description: "Enjoy a restful stay in our Standard-themed double loft, offering with a view of the mountains' changing seasons, with a private balcony or terrace, and unique touches of with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 320,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-charleston-3-room-2-Queen-None",
    name: "Superior Queen Penthouse",
    description: "A vast queen retreat with a pleasant outlook, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 316,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-charleston-3-room-2-Double-OceanView",
    name: "Liberty Double Suite",
    description: "This inviting double suite promises where the horizon meets the ocean, enriched by Liberty-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 336,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-charleston-3-room-2-Single-GardenView",
    name: "Deluxe Single Penthouse",
    description: "Enjoy a sophisticated stay in our Deluxe-themed single penthouse, offering where you can enjoy the garden's seasonal blooms, featuring a curated minibar selection, and unique touches of featuring sleek urban design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 202,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-charleston-3-room-2-Single-CityView",
    name: "Luxury Single Penthouse",
    description: "Enjoy a industrial stay in our Luxury-themed single penthouse, offering showcasing the urban landscape, with a private balcony or terrace, and unique touches of offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 190,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-charleston-3-room-2-Twin-GardenView",
    name: "Premium Twin Suite",
    description: "Enjoy a prestigious stay in our Premium-themed twin suite, offering with a view of the garden's seasonal changes, equipped with all the modern conveniences, and unique touches of with rustic and modern influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 228,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-charleston-3-room-2-Double-GardenView",
    name: "Colonial Double Apartment",
    description: "Discover the charm of this Colonial-themed double apartment, complete with retro ambiance, stunning with a view of the garden's seasonal changes, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 277,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
