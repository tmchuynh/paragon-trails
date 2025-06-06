import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lake Taupo Resort
export const lakeTaupoResortRooms: RoomOption[] = [
  {
    id: "hotel-auckland-1-room-0-King-GardenView",
    name: "Kiwi King Apartment",
    description: "Our Kiwi-themed king apartment offers regal luxury, panoramic with a view of tranquil water features, and featuring a curated minibar selection, inspired by with Maori-inspired motifs.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 761,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-auckland-1-room-0-Queen-None",
    name: "Executive Queen Suite",
    description: "A expansive queen retreat with a pleasant outlook, showcasing the serene beauty of New Zealand landscapes.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 600,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-auckland-1-room-0-King-OceanView",
    name: "Classic King Penthouse",
    description: "This gentle king penthouse promises with a view of the tranquil sea, enriched by Classic-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 951,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-auckland-1-room-0-Double-OceanView",
    name: "Signature Double Apartment",
    description: "Enjoy a fashionable stay in our Signature-themed double apartment, offering with a panoramic view of the coastline, with high-speed internet access, and unique touches of featuring natural materials and scenic views.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 708,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-auckland-1-room-0-King-MountainView",
    name: "Deluxe King Loft",
    description: "Deluxe-themed king loft where you can escape to the mountains, showcasing the serene beauty of New Zealand landscapes and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 983,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-auckland-1-room-0-Twin-GardenView",
    name: "Luxury Twin Room",
    description: "Our compact Luxury-themed room offers with a view of tranquil water features, refined comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 570,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-auckland-1-room-0-Queen-MountainView",
    name: "Fern Queen Room",
    description: "Relax in our avant-garde industrial queen room featuring where you can gaze at the towering peaks, along with with a private balcony or terrace and featuring natural materials and scenic views.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 754,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-auckland-1-room-0-Single-OceanView",
    name: "Kiwi Single Apartment",
    description: "This palatial single accommodation offers where the ocean meets the sky, showcasing the serene beauty of New Zealand landscapes.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 564,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
