import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hotel Lago Maggiore
export const hotelLagoMaggioreRooms: RoomOption[] = [
  {
    id: "hotel-milan-4-room-3-Double-CityView",
    name: "Superior Double Loft",
    description: "This restful double accommodation offers overlooking the vibrant cityscape, offering a touch of la dolce vita.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 128,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-milan-4-room-3-Twin-MountainView",
    name: "Harmony Twin Penthouse",
    description: "A vast twin penthouse designed for contemporary comfort, with where you can find inspiration in the mountains and complete with a well-appointed bathroom, reflecting inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 124,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-milan-4-room-3-Twin-GardenView",
    name: "Horizon Twin Apartment",
    description: "Our generous Horizon-themed apartment offers with a view of the garden's peaceful ambiance, sumptuous comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 126,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-milan-4-room-3-Single-MountainView",
    name: "Executive Single Villa",
    description: "Discover the charm of this Executive-themed single villa, complete with snug ambiance, stunning featuring awe-inspiring mountain scenery, and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 108,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
