import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Laguna Vista Hotel
export const lagunaVistaHotelRooms: RoomOption[] = [
  {
    id: "hotel-new-york-city-4-room-3-King-OceanView",
    name: "Classic King Penthouse",
    description: "Indulge in the bohemian atmosphere of our king penthouse, with spectacular with the sound of the ocean as your backdrop, decorated with local artistic influences, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Hearing Support", "Wheelchair Accessible"],
    pricePerNight: 382,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-new-york-city-4-room-3-Twin-None",
    name: "Luxury Twin Penthouse",
    description: "Step into a tranquil twin penthouse that combines Luxury-themed with breathtaking with a pleasant outlook, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 163,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-new-york-city-4-room-3-Twin-MountainView",
    name: "Modern Twin Studio",
    description: "Unwind in this refined twin studio with a view of the mountains' rugged terrain, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 237,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-new-york-city-4-room-3-SofaBed-MountainView",
    name: "Classic Sofa Bed Loft",
    description: "A modern sofa bed loft designed for pleasant comfort, with where you can escape to the mountains and equipped with all the modern conveniences, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 225,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
