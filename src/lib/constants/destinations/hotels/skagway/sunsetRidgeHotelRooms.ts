import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Ridge Hotel
export const sunsetRidgeHotelRooms: RoomOption[] = [
  {
    id: "hotel-skagway-4-room-3-King-GardenView",
    name: "Manhattan King Room",
    description: "Relax in our spacious refreshing king room featuring where you can find solace in nature's embrace, along with with a luxurious soaking tub and with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 172,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-skagway-4-room-3-Queen-GardenView",
    name: "Premium Queen Studio",
    description: "Relax in our soft vintage queen studio featuring where you can take in the fresh air, along with with a spacious seating area and with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 135,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-skagway-4-room-3-Twin-None",
    name: "Superior Twin Apartment",
    description: "Relax in our broad modern twin apartment featuring with a pleasant outlook, along with with a spacious work area and offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 84,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-skagway-4-room-3-Queen-CityView",
    name: "Liberty Queen Penthouse",
    description: "A traditional queen penthouse designed for elegant comfort, with with stunning views of the city skyline and featuring a curated minibar selection, reflecting featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 144,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-skagway-4-room-3-Double-MountainView",
    name: "Liberty Double Penthouse",
    description: "Our Liberty-themed double penthouse offers industrial luxury, panoramic with majestic mountain vistas, and featuring a curated minibar selection, inspired by offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 129,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-skagway-4-room-3-Single-CityView",
    name: "Premium Single Loft",
    description: "Experience our serene, vintage single loft where city lights twinkle at night, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 84,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-skagway-4-room-3-Double-None",
    name: "Signature Double Villa",
    description: "Experience our spacious, classic double villa with a pleasant outlook, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 96,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-skagway-4-room-3-Twin-OceanView",
    name: "Signature Twin Penthouse",
    description: "This homey twin penthouse promises with a panoramic view of the coastline, enriched by Signature-themed details and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 112,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-skagway-4-room-3-Twin-MountainView",
    name: "Classic Twin Penthouse",
    description: "Discover the charm of this Classic-themed twin penthouse, complete with soothing ambiance, stunning with a view of the mountains' breathtaking sunsets, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 123,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-skagway-4-room-3-Twin-GardenView",
    name: "Premium Twin Studio",
    description: "This cozy twin accommodation offers where you can relax in a natural oasis, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 95,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
