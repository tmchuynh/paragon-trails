import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Mountain View Inn
export const theMountainViewInnRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-7-room-6-Twin-None",
    name: "Tranquility Twin Suite",
    description: "A minimalist twin suite designed for regal comfort, with with a pleasant outlook and with high-speed internet access, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 267,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-glacier-bay-7-room-6-Queen-GardenView",
    name: "Signature Queen Loft",
    description: "Our refined Signature-themed loft offers where you can relax in a garden haven, heartwarming comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 417,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-glacier-bay-7-room-6-Twin-CityView",
    name: "Signature Twin Suite",
    description: "Our Signature-themed twin suite offers commodious luxury, panoramic overlooking the vibrant cityscape, and including climate control for your comfort, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 329,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-glacier-bay-7-room-6-Double-None",
    name: "Tranquility Double Apartment",
    description: "Relax in our intimate pleasant double apartment featuring with a pleasant outlook, along with offering a unique blend of style and comfort and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 317,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
