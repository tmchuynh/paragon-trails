import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Velvet Lantern
export const theVelvetLanternRooms: RoomOption[] = [
  {
    id: "hotel-bhaktapur-4-room-3-Twin-GardenView",
    name: "Classic Twin Suite",
    description: "Enjoy a grandiose stay in our Classic-themed twin suite, offering where you can enjoy the sights and sounds of nature, including climate control for your comfort, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 4068498,
    currency: "NPR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-bhaktapur-4-room-3-King-CityView",
    name: "Classic King Villa",
    description: "Discover the charm of this Classic-themed king villa, complete with generous ambiance, stunning where the city comes alive at dusk, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 7003764,
    currency: "NPR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-bhaktapur-4-room-3-Twin-None",
    name: "Signature Twin Room",
    description: "Indulge in the sophisticated atmosphere of our twin room, with spectacular with a pleasant outlook, featuring thoughtful design elements, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 3867633,
    currency: "NPR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-bhaktapur-4-room-3-Queen-None",
    name: "Deluxe Queen Penthouse",
    description: "Our vintage Deluxe-themed penthouse offers with a pleasant outlook, luxurious comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4876867,
    currency: "NPR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
