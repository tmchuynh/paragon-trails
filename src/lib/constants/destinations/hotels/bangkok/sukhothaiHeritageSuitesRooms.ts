import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sukhothai Heritage Suites
export const sukhothaiHeritageSuitesRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-11-room-10-Double-OceanView",
    name: "Jasmine Double Room",
    description: "Our Jasmine-themed double room offers fashionable luxury, panoramic with a panoramic view of the coastline, and with carefully selected furnishings, inspired by featuring traditional Thai craftsmanship.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 166694,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-bangkok-11-room-10-SofaBed-MountainView",
    name: "Luxury Sofa Bed Loft",
    description: "Step into a avant-garde sofa bed loft that combines Luxury-themed with breathtaking with panoramic views of the surrounding mountains, complemented by with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 154419,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-bangkok-11-room-10-King-GardenView",
    name: "Deluxe King Room",
    description: "A voluminous king room designed for chic comfort, with featuring a peaceful garden setting and equipped with all the modern conveniences, reflecting with subtle nods to Thailand's rich cultural heritage.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 221055,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-bangkok-11-room-10-Single-None",
    name: "Deluxe Single Penthouse",
    description: "Our palatial Deluxe-themed penthouse offers with a pleasant outlook, comfortable comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 101113,
    currency: "THB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
