import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Yellowknife Aurora Lodge
export const yellowknifeAuroraLodgeRooms: RoomOption[] = [
  {
    id: "hotel-victoria-8-room-7-Single-None",
    name: "Deluxe Single Penthouse",
    description: "This futuristic single accommodation offers with a pleasant outlook, featuring warm wood and stone accents.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 300,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-victoria-8-room-7-Queen-CityView",
    name: "Deluxe Queen Penthouse",
    description: "A artistic queen penthouse designed for soothing comfort, with with a view of the city's waterfront and with carefully selected furnishings, reflecting blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 449,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-victoria-8-room-7-King-MountainView",
    name: "Deluxe King Studio",
    description: "Discover the charm of this Deluxe-themed king studio, complete with calming ambiance, stunning with a view of the mountains' rugged terrain, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 690,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-victoria-8-room-7-Twin-None",
    name: "Premium Twin Suite",
    description: "Enjoy a regal stay in our Premium-themed twin suite, offering with a pleasant outlook, with a luxurious soaking tub, and unique touches of inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 316,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
