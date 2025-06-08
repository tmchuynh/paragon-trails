import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Zacatecas Silver Lodge
export const theZacatecasSilverLodgeRooms: RoomOption[] = [
  {
    id: "hotel-mexico-city-11-room-10-King-GardenView",
    name: "Premium King Penthouse",
    description: "Relax in our upscale minimalist king penthouse featuring where you can enjoy the beauty of nature, along with with a spacious work area and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 5671,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-mexico-city-11-room-10-Single-CityView",
    name: "Deluxe Single Studio",
    description: "Relax in our voluminous calming single studio featuring where city lights twinkle at night, along with with a luxurious soaking tub and created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 2709,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-mexico-city-11-room-10-Single-GardenView",
    name: "Luxury Single Villa",
    description: "Luxury-themed single villa with a view of blooming flowers and greenery, decorated with local artistic influences and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 3324,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-mexico-city-11-room-10-Queen-MountainView",
    name: "Deluxe Queen Penthouse",
    description: "A sophisticated queen penthouse designed for soothing comfort, with featuring awe-inspiring mountain scenery and with blackout curtains for a perfect night's sleep, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 5404,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
