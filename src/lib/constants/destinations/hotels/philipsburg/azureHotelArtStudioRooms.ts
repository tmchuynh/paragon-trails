import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Azure Hotel & Art Studio
export const azureHotelArtStudioRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-2-room-1-King-OceanView",
    name: "Standard King Villa",
    description: "Standard-themed villa with plush decor, where you can feel the ocean breeze, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 1200,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-philipsburg-2-room-1-Twin-MountainView",
    name: "Superior Twin Room",
    description: "Our ornate Superior-themed room offers with a view of the mountains' lush valleys, elegant comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 700,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-philipsburg-2-room-1-SofaBed-GardenView",
    name: "Seashell Sofa Bed Apartment",
    description: "Relax in our retro upscale sofa bed apartment featuring with a view of shaded garden paths, along with featuring a curated minibar selection and offering a vibrant island-inspired experience.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 694,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-philipsburg-2-room-1-Single-CityView",
    name: "Premium Single Villa",
    description: "This refined single villa promises with a view of iconic landmarks, enriched by Premium-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 548,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
