import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Colonia Heritage Inn
export const coloniaHeritageInnRooms: RoomOption[] = [
  {
    id: "hotel-montevideo-4-room-3-Double-CityView",
    name: "Deluxe Double Penthouse",
    description: "Indulge in the broad atmosphere of our double penthouse, with spectacular showcasing the urban landscape, featuring warm, earthy tones, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 199833,
    currency: "UYU",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-montevideo-4-room-3-Twin-CityView",
    name: "Classic Twin Apartment",
    description: "Discover the charm of this Classic-themed twin apartment, complete with ample ambiance, stunning overlooking the vibrant cityscape, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 190075,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-montevideo-4-room-3-King-OceanView",
    name: "Classic King Studio",
    description: "A opulent king retreat with the sound of the ocean as your backdrop, highlighting relaxed South American style.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 360771,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-montevideo-4-room-3-Single-MountainView",
    name: "Premium Single Villa",
    description: "Indulge in the cozy atmosphere of our single villa, with spectacular with a view of the rugged mountain landscape, highlighting relaxed South American style, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 200696,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-montevideo-4-room-3-Queen-GardenView",
    name: "Signature Queen Studio",
    description: "Unwind in this prestigious queen studio with a view of tranquil water features, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 277597,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
