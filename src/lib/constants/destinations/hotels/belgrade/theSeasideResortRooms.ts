import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Seaside Resort
export const theSeasideResortRooms: RoomOption[] = [
  {
    id: "hotel-belgrade-7-room-6-SofaBed-CityView",
    name: "Modern Sofa Bed Room",
    description: "Modern-themed sofa bed room where you can enjoy the city's energy, designed for ultimate comfort and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 1403809,
    currency: "RSD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-belgrade-7-room-6-Twin-GardenView",
    name: "Harmony Twin Villa",
    description: "Unwind in this sophisticated twin villa with a view of shaded garden paths, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 1474628,
    currency: "RSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-belgrade-7-room-6-Double-MountainView",
    name: "Standard Double Room",
    description: "This lavish double accommodation offers with panoramic views of the mountain landscape, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 1870855,
    currency: "RSD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-belgrade-7-room-6-King-None",
    name: "Serenity King Apartment",
    description: "Serenity-themed apartment with stylish decor, with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 1831650,
    currency: "RSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
