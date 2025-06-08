import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Guadalajara Grand
export const theGuadalajaraGrandRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-2-room-1-Queen-CityView",
    name: "Fiesta Queen Suite",
    description: "Relax in our sumptuous soothing queen suite featuring with a view of the city's cultural landmarks, along with featuring a curated minibar selection and blending traditional Mexican motifs with modern style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 35815,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-cozumel-2-room-1-Twin-MountainView",
    name: "Sunstone Twin Villa",
    description: "Enjoy a classic stay in our Sunstone-themed twin villa, offering with majestic mountain vistas, complete with a well-appointed bathroom, and unique touches of featuring bright colors and handcrafted decor.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 33120,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-cozumel-2-room-1-Double-CityView",
    name: "Oaxaca Double Villa",
    description: "A snug double retreat with a view of the city's cultural landmarks, highlighting cultural richness and warmth.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 32064,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-cozumel-2-room-1-Single-MountainView",
    name: "Oaxaca Single Penthouse",
    description: "Experience our opulent, compact single penthouse with a view of the mountains' serene beauty, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 30023,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
