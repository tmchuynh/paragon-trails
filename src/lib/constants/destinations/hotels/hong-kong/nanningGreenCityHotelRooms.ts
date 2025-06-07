import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Nanning Green City Hotel
export const nanningGreenCityHotelRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-4-room-3-SofaBed-MountainView",
    name: "Serenity Sofa Bed Apartment",
    description: "A ample sofa bed apartment designed for pleasant comfort, with with a view of the mountains' changing seasons and with a modern en-suite bathroom, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 1509,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-hong-kong-4-room-3-Twin-GardenView",
    name: "Modern Twin Suite",
    description: "Our Modern-themed twin suite offers comfortable luxury, panoramic with a view of manicured lawns and gardens, and with blackout curtains for a perfect night's sleep, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 1582,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-hong-kong-4-room-3-King-CityView",
    name: "Classic King Suite",
    description: "This well-proportioned king accommodation offers with a front-row seat to the city's heartbeat, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 2109,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-hong-kong-4-room-3-Single-GardenView",
    name: "Premium Single Penthouse",
    description: "Our relaxing Premium-themed penthouse offers where you can enjoy the garden's peaceful atmosphere, peaceful comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 1283,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
