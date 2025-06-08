import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Sun City Resort
export const theSunCityResortRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-10-room-9-Double-GardenView",
    name: "Premium Double Villa",
    description: "Indulge in the serene atmosphere of our double villa, with spectacular where you can relax in a garden haven, featuring thoughtful design elements, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 3324,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-cape-town-10-room-9-Double-None",
    name: "Premium Double Apartment",
    description: "Our Premium-themed double apartment offers glamorous luxury, panoramic with a pleasant outlook, and with carefully selected furnishings, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 2699,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-cape-town-10-room-9-King-GardenView",
    name: "Classic King Apartment",
    description: "Discover the charm of this Classic-themed king apartment, complete with comfy ambiance, stunning where you can enjoy the serenity of a garden retreat, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 4981,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-cape-town-10-room-9-Queen-None",
    name: "Superior Queen Room",
    description: "Our open-concept Superior-themed room offers with a pleasant outlook, extensive comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 3384,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
