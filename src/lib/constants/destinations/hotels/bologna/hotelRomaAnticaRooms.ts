import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hotel Roma Antica
export const hotelRomaAnticaRooms: RoomOption[] = [
  {
    id: "hotel-bologna-8-room-7-Twin-None",
    name: "Deluxe Twin Room",
    description: "Deluxe-themed room with airy decor, with a pleasant outlook, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 113,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-bologna-8-room-7-SofaBed-None",
    name: "Luxury Sofa Bed Room",
    description: "Relax in our extensive peaceful sofa bed room featuring with a pleasant outlook, along with with a spacious seating area and with classic Italian elegance.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 118,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-bologna-8-room-7-Single-MountainView",
    name: "Serenity Single Room",
    description: "Serenity-themed single room where you can escape to the mountains, offering a touch of la dolce vita and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 123,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-bologna-8-room-7-Queen-None",
    name: "Classic Queen Penthouse",
    description: "A grandiose queen penthouse designed for comfy comfort, with with a pleasant outlook and featuring a curated minibar selection, reflecting featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 149,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
