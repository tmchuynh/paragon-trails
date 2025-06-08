import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Turku Riverside Suites
export const turkuRiversideSuitesRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-1-room-0-Queen-None",
    name: "Forest Queen Suite",
    description: "Our Forest-themed queen suite offers extensive luxury, panoramic with a pleasant outlook, and offering a unique blend of style and comfort, inspired by with a cozy and comfortable atmosphere inspired by Finnish nature.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 113,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-helsinki-1-room-0-SofaBed-GardenView",
    name: "Executive Sofa Bed Apartment",
    description: "This upscale sofa bed accommodation offers with serene garden views, with a cozy and comfortable atmosphere inspired by Finnish nature.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 105,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-helsinki-1-room-0-King-CityView",
    name: "Executive King Apartment",
    description: "A broad king retreat with a view of the city's cultural landmarks, featuring minimalist design with natural wood accents.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 145,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-helsinki-1-room-0-Single-GardenView",
    name: "Standard Single Loft",
    description: "Experience our stretching, avant-garde single loft overlooking lush garden landscapes, with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 93,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
