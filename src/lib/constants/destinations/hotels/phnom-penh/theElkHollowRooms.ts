import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Elk Hollow
export const theElkHollowRooms: RoomOption[] = [
  {
    id: "hotel-phnom-penh-7-room-6-Queen-GardenView",
    name: "Executive Queen Suite",
    description: "A restful queen suite designed for relaxing comfort, with where you can relax in a garden haven and with a modern en-suite bathroom, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 612155,
    currency: "KHR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-phnom-penh-7-room-6-Twin-OceanView",
    name: "Tranquility Twin Studio",
    description: "A refined twin studio designed for prestigious comfort, with with a panoramic view of the coastline and with a spacious work area, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 443022,
    currency: "KHR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-phnom-penh-7-room-6-Single-MountainView",
    name: "Classic Single Suite",
    description: "Discover the charm of this Classic-themed single suite, complete with voluminous ambiance, stunning with a view of the mountains' natural beauty, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 394848,
    currency: "KHR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-phnom-penh-7-room-6-Single-CityView",
    name: "Classic Single Studio",
    description: "This fashionable single accommodation offers where the city comes alive at dusk, featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 385178,
    currency: "KHR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
