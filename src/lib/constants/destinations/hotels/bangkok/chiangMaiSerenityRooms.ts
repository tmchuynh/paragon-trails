import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Chiang Mai Serenity
export const chiangMaiSerenityRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-2-room-1-King-None",
    name: "Classic King Room",
    description: "Classic-themed king room with a pleasant outlook, adorned with Thai-inspired decor and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 190780,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-bangkok-2-room-1-Twin-None",
    name: "Thai Twin Penthouse",
    description: "Unwind in this retro twin penthouse with a pleasant outlook, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 115078,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-bangkok-2-room-1-Queen-OceanView",
    name: "Emerald Queen Apartment",
    description: "Our Emerald-themed queen apartment offers modern luxury, panoramic with a panoramic view of the coastline, and with high-speed internet access, inspired by adorned with Thai-inspired decor.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 185180,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-bangkok-2-room-1-Queen-GardenView",
    name: "Premium Queen Penthouse",
    description: "Our elegant Premium-themed penthouse offers where you can relax in a garden haven, restful comfort, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 163332,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
