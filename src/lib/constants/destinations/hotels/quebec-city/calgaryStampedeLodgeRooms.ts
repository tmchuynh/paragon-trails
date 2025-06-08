import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Calgary Stampede Lodge
export const calgaryStampedeLodgeRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-3-room-2-Single-None",
    name: "Executive Single Suite",
    description: "Relax in our prestigious ample single suite featuring with a pleasant outlook, along with with carefully selected furnishings and featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 284,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-quebec-city-3-room-2-Twin-GardenView",
    name: "Superior Twin Room",
    description: "A palatial twin room designed for eclectic comfort, with where you can enjoy the garden's seasonal blooms and featuring a curated minibar selection, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 340,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-quebec-city-3-room-2-King-GardenView",
    name: "Deluxe King Apartment",
    description: "Unwind in this bohemian king apartment with a view of shaded garden paths, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 556,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-quebec-city-3-room-2-Queen-GardenView",
    name: "Luxury Queen Studio",
    description: "Luxury-themed queen studio with a view of the garden's seasonal changes, designed for ultimate comfort and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 448,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
