import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Snuggly Seahorse
export const theSnugglySeahorseRooms: RoomOption[] = [
  {
    id: "hotel-seattle-6-room-5-Single-CityView",
    name: "Deluxe Single Apartment",
    description: "A sumptuous single retreat with a view of the city's cultural landmarks, featuring sleek urban design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 216,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-seattle-6-room-5-Queen-CityView",
    name: "Executive Queen Suite",
    description: "This generous queen suite promises where you can watch the city wake up, enriched by Executive-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 337,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-seattle-6-room-5-King-None",
    name: "Executive King Suite",
    description: "Experience our intimate, wide-ranging king suite with a pleasant outlook, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 369,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-seattle-6-room-5-Twin-MountainView",
    name: "Superior Twin Loft",
    description: "A eclectic twin loft designed for open-concept comfort, with with a view of snow-capped peaks and with blackout curtains for a perfect night's sleep, reflecting featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 277,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
