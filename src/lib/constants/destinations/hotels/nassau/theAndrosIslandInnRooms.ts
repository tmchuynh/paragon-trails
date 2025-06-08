import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Andros Island Inn
export const theAndrosIslandInnRooms: RoomOption[] = [
  {
    id: "hotel-nassau-3-room-2-Twin-OceanView",
    name: "Signature Twin Villa",
    description: "Relax in our classic elegant twin villa featuring with the sound of the ocean as your backdrop, along with with high-speed internet access and with bright tropical colors and seaside charm.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 312,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-nassau-3-room-2-Twin-None",
    name: "Executive Twin Suite",
    description: "Experience our heartwarming, refreshing twin suite with a pleasant outlook, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 248,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-nassau-3-room-2-SofaBed-None",
    name: "Luxury Sofa Bed Apartment",
    description: "Unwind in this ornate sofa bed apartment with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 248,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-nassau-3-room-2-King-MountainView",
    name: "Paradise King Villa",
    description: "Experience our avant-garde, deluxe king villa with a view of the mountains' changing seasons, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 494,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
