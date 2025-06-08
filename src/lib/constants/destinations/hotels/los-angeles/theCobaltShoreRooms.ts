import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Cobalt Shore
export const theCobaltShoreRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-3-room-2-Double-GardenView",
    name: "Executive Double Room",
    description: "Executive-themed double room with a view of the garden's seasonal changes, designed for ultimate comfort and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 218,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-los-angeles-3-room-2-Twin-GardenView",
    name: "Classic Twin Villa",
    description: "Our Classic-themed twin villa offers fashionable luxury, panoramic with a view of the garden's lush greenery, and with blackout curtains for a perfect night's sleep, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 192,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-los-angeles-3-room-2-SofaBed-CityView",
    name: "Signature Sofa Bed Apartment",
    description: "Indulge in the rustic atmosphere of our sofa bed apartment, with spectacular with a view of the city's cultural landmarks, designed for ultimate comfort, and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 197,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-los-angeles-3-room-2-SofaBed-MountainView",
    name: "Harmony Sofa Bed Suite",
    description: "Enjoy a restful stay in our Harmony-themed sofa bed suite, offering with a view of the mountains' breathtaking sunsets, with blackout curtains for a perfect night's sleep, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 221,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
