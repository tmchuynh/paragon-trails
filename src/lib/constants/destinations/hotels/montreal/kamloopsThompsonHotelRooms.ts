import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kamloops Thompson Hotel
export const kamloopsThompsonHotelRooms: RoomOption[] = [
  {
    id: "hotel-montreal-2-room-1-Twin-GardenView",
    name: "Timber Twin Villa",
    description: "Indulge in the bohemian atmosphere of our twin villa, with spectacular where you can enjoy the garden's peaceful atmosphere, with cozy, nature-inspired themes, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 474,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-montreal-2-room-1-Double-GardenView",
    name: "Luxury Double Loft",
    description: "Luxury-themed double loft where you can enjoy the serenity of a garden retreat, featuring warm wood and stone accents and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 548,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-montreal-2-room-1-Queen-None",
    name: "Deluxe Queen Apartment",
    description: "Unwind in this sleek queen apartment with a pleasant outlook, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 507,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-montreal-2-room-1-SofaBed-OceanView",
    name: "Aurora Sofa Bed Loft",
    description: "Experience our comfortable, modern sofa bed loft where you can enjoy stunning sunsets over the water, with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 558,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
