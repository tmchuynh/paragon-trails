import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Nắng Vàng Villas
export const nngVngVillasRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-2-room-1-King-CityView",
    name: "Modern King Loft",
    description: "This comfortable king accommodation offers with a view of the city's cultural landmarks, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 3364618,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Double-OceanView",
    name: "Serenity Double Studio",
    description: "Unwind in this pleasant double studio with the sound of the ocean as your backdrop, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 3168954,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Twin-GardenView",
    name: "Superior Twin Room",
    description: "Experience our tasteful, majestic twin room where you can find solace in nature's embrace, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 2471091,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Single-MountainView",
    name: "Executive Single Studio",
    description: "Our Executive-themed single studio offers expansive luxury, panoramic with a view of the mountains' changing seasons, and with carefully selected furnishings, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 2348850,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Single-GardenView",
    name: "Premium Single Suite",
    description: "Relax in our intimate retro single suite featuring with a view of the garden's peaceful ambiance, along with with a luxurious soaking tub and featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 1935838,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Queen-GardenView",
    name: "Luxury Queen Penthouse",
    description: "Experience our pleasant, retro queen penthouse with a view of the garden's tranquil pathways, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 3039724,
    currency: "VND",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Twin-OceanView",
    name: "Classic Twin Studio",
    description: "Experience our regal, peaceful twin studio where you can hear the soothing sound of the sea, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 2518782,
    currency: "VND",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-SofaBed-MountainView",
    name: "Premium Sofa Bed Room",
    description: "Premium-themed sofa bed room with a view of the mountains' breathtaking sunsets, designed for ultimate comfort and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2429527,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Single-CityView",
    name: "Luxury Single Loft",
    description: "Our Luxury-themed single loft offers ornate luxury, panoramic with a view of the city's waterfront, and with a private balcony or terrace, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2127062,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1-Double-GardenView",
    name: "Classic Double Loft",
    description: "Classic-themed loft with sophisticated decor, with a view of the garden's seasonal changes, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 2450669,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
