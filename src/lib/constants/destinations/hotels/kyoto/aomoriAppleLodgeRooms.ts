import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aomori Apple Lodge
export const aomoriAppleLodgeRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-4-room-3-SofaBed-CityView",
    name: "Premium Sofa Bed Suite",
    description: "Our grandiose Premium-themed suite offers where city lights twinkle at night, grandiose comfort, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4345776,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-kyoto-4-room-3-Double-CityView",
    name: "Deluxe Double Penthouse",
    description: "Unwind in this soft double penthouse with a backdrop of city parks and green spaces, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 5248385,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-kyoto-4-room-3-SofaBed-OceanView",
    name: "Superior Sofa Bed Loft",
    description: "Superior-themed loft with compact decor, with a view of the ocean's horizon, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 5247376,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-kyoto-4-room-3-King-None",
    name: "Premium King Room",
    description: "Our opulent Premium-themed room offers with a pleasant outlook, spacious comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 6788904,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-kyoto-4-room-3-King-CityView",
    name: "Lotus King Apartment",
    description: "Indulge in the rustic atmosphere of our king apartment, with spectacular where the city skyline meets the horizon, featuring traditional tatami elements, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 6714845,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
