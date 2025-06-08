import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Arctic Circle Lodge
export const arcticCircleLodgeRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-8-room-7-Single-None",
    name: "Deluxe Single Loft",
    description: "Unwind in this airy single loft with a pleasant outlook, with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 67,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-helsinki-8-room-7-Twin-CityView",
    name: "Premium Twin Suite",
    description: "Relax in our intimate sizable twin suite featuring offering panoramic city vistas, along with featuring premium bath amenities and blending Scandinavian style with modern amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 89,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-helsinki-8-room-7-Queen-MountainView",
    name: "Lake Queen Villa",
    description: "Our Lake-themed queen villa offers upscale luxury, panoramic with a view of snow-capped peaks, and equipped with all the modern conveniences, inspired by blending Scandinavian style with modern amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 149,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-helsinki-8-room-7-Double-OceanView",
    name: "Lapland Double Loft",
    description: "This bohemian double loft promises featuring uninterrupted ocean vistas, enriched by Lapland-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 120,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
