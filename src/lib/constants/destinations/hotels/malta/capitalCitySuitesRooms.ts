import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Capital City Suites
export const capitalCitySuitesRooms: RoomOption[] = [
  {
    id: "hotel-malta-1-room-0-Double-GardenView",
    name: "Superior Double Apartment",
    description: "Enjoy a minimalist stay in our Superior-themed double apartment, offering where you can enjoy the beauty of nature, offering a unique blend of style and comfort, and unique touches of with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 293,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-malta-1-room-0-Twin-OceanView",
    name: "Standard Twin Villa",
    description: "A snug twin retreat with a view of the sandy beaches, with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 277,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-malta-1-room-0-Single-OceanView",
    name: "Maltese Lace Single Suite",
    description: "A grandiose single retreat where you can hear the soothing sound of the sea, offering a unique island experience with a touch of luxury.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 251,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-malta-1-room-0-King-GardenView",
    name: "Classic King Villa",
    description: "Experience our airy, indulgent king villa where you can enjoy the garden's seasonal blooms, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 357,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
