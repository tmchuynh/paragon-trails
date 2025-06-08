import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Pearl Break Hotel
export const thePearlBreakHotelRooms: RoomOption[] = [
  {
    id: "hotel-kuala-lumpur-3-room-2-SofaBed-MountainView",
    name: "Classic Sofa Bed Studio",
    description: "A rustic sofa bed studio designed for stylish comfort, with where you can enjoy the peace of the highlands and with a modern en-suite bathroom, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 1123,
    currency: "MYR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-kuala-lumpur-3-room-2-Queen-None",
    name: "Modern Queen Apartment",
    description: "This airy queen accommodation offers with a pleasant outlook, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 1092,
    currency: "MYR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-kuala-lumpur-3-room-2-Twin-CityView",
    name: "Harmony Twin Suite",
    description: "Indulge in the prestigious atmosphere of our twin suite, with spectacular overlooking the vibrant cityscape, created with both style and function in mind, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 918,
    currency: "MYR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-kuala-lumpur-3-room-2-Twin-MountainView",
    name: "Classic Twin Apartment",
    description: "Classic-themed twin apartment with a view of the mountains' breathtaking sunsets, created with both style and function in mind and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 1125,
    currency: "MYR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
