import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Motala Canal Hotel
export const motalaCanalHotelRooms: RoomOption[] = [
  {
    id: "hotel-stockholm-10-room-9-Queen-None",
    name: "Harmony Queen Villa",
    description: "Step into a intimate queen villa that combines Harmony-themed with breathtaking with a pleasant outlook, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 33014,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-stockholm-10-room-9-Twin-None",
    name: "Superior Twin Penthouse",
    description: "Our Superior-themed twin penthouse offers inviting luxury, panoramic with a pleasant outlook, and with high-speed internet access, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 26751,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-stockholm-10-room-9-Queen-MountainView",
    name: "Serenity Queen Room",
    description: "Unwind in this snug queen room where you can enjoy the mountains' majestic presence, with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 42345,
    currency: "SEK",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-stockholm-10-room-9-Single-None",
    name: "Premium Single Suite",
    description: "Premium-themed suite with tranquil decor, with a pleasant outlook, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 23030,
    currency: "SEK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
