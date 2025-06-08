import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Pavillion Grand
export const thePavillionGrandRooms: RoomOption[] = [
  {
    id: "hotel-udaipur-6-room-5-King-CityView",
    name: "Lotus King Villa",
    description: "Unwind in this serene king villa with a view of iconic landmarks, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 1020198,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-udaipur-6-room-5-Double-GardenView",
    name: "Ganges Double Studio",
    description: "A plush double retreat surrounded by vibrant flora, highlighting cultural depth and warmth.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 788334,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-udaipur-6-room-5-Double-MountainView",
    name: "Luxury Double Room",
    description: "Our Luxury-themed double room offers refreshing luxury, panoramic where mountains paint the horizon, and complete with a well-appointed bathroom, inspired by offering vibrant colors and luxurious details.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 844276,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-udaipur-6-room-5-Single-CityView",
    name: "Deluxe Single Villa",
    description: "Our Deluxe-themed single villa offers open-concept luxury, panoramic offering panoramic city vistas, and with a spacious seating area, inspired by highlighting cultural depth and warmth.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 577910,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
