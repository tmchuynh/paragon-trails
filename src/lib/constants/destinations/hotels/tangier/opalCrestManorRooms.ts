import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Opal Crest Manor
export const opalCrestManorRooms: RoomOption[] = [
  {
    id: "hotel-tangier-4-room-3-Queen-None",
    name: "Tranquility Queen Room",
    description: "Relax in our compact prestigious queen room featuring with a pleasant outlook, along with with a luxurious soaking tub and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 23821,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-tangier-4-room-3-SofaBed-None",
    name: "Classic Sofa Bed Suite",
    description: "Classic-themed sofa bed suite with a pleasant outlook, featuring thoughtful design elements and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 17697,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-tangier-4-room-3-Twin-MountainView",
    name: "Classic Twin Villa",
    description: "A spacious twin retreat where mountains paint the horizon, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 24448,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-tangier-4-room-3-Twin-None",
    name: "Classic Twin Penthouse",
    description: "Indulge in the stretching atmosphere of our twin penthouse, with spectacular with a pleasant outlook, designed for ultimate comfort, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 19681,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
