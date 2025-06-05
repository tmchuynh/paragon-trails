import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Imperial Jade
export const theImperialJadeRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Modern Double Villa",
    description: "Our refined Modern-themed villa offers with a view of the garden's lush greenery, calming comfort, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Dining Table", "Family Room"],
    pricePerNight: 236,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Executive Double Apartment",
    description: "Relax in our sophisticated tasteful double apartment featuring with a view of the mountains' lush valleys, along with complete with a well-appointed bathroom and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Family Room", "Connecting Rooms"],
    pricePerNight: 244,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Modern Single Loft",
    description: "Modern-themed loft with chic decor, with a view of the city's cultural landmarks, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Pet Friendly", "In-Room Safe", "Fireplace", "Connecting Rooms", "Outdoor Furniture"],
    pricePerNight: 170,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Executive Single Apartment",
    description: "Our Executive-themed single apartment offers peaceful luxury, panoramic where you can escape to the mountains, and with blackout curtains for a perfect night's sleep, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Seating Area", "Fitness Equipment", "Jacuzzi Tub", "Bluetooth Speaker", "Fireplace"],
    pricePerNight: 186,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
