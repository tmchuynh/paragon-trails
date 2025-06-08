import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Radiant Robin
export const theRadiantRobinRooms: RoomOption[] = [
  {
    id: "hotel-washington-1-room-0-Queen-MountainView",
    name: "Deluxe Queen Villa",
    description: "Indulge in the vintage atmosphere of our queen villa, with spectacular with a view of the rugged mountain landscape, with rustic and modern influences, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 338,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-washington-1-room-0-Queen-GardenView",
    name: "Classic Queen Studio",
    description: "Discover the charm of this Classic-themed queen studio, complete with artistic ambiance, stunning with a view of the garden's natural beauty, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 362,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-washington-1-room-0-SofaBed-None",
    name: "Heritage Sofa Bed Suite",
    description: "Discover the charm of this Heritage-themed sofa bed suite, complete with open-concept ambiance, stunning with a pleasant outlook, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 230,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-washington-1-room-0-Twin-None",
    name: "Classic Twin Room",
    description: "Our Classic-themed twin room offers wide-ranging luxury, panoramic with a pleasant outlook, and with plush bedding for ultimate comfort, inspired by highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 221,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
