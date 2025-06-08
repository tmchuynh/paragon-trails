import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hotel Bella Napoli
export const hotelBellaNapoliRooms: RoomOption[] = [
  {
    id: "hotel-rome-3-room-2-Twin-CityView",
    name: "Executive Twin Penthouse",
    description: "Executive-themed twin penthouse where you can enjoy the city's energy, offering a touch of la dolce vita and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 90,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-rome-3-room-2-Single-GardenView",
    name: "Premium Single Villa",
    description: "This roomy single villa promises with a view of colorful flower beds, enriched by Premium-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 86,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-rome-3-room-2-Double-GardenView",
    name: "Premium Double Suite",
    description: "This inviting double suite promises where you can enjoy the garden's seasonal blooms, enriched by Premium-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-rome-3-room-2-King-OceanView",
    name: "Tranquility King Suite",
    description: "Step into a ornate king suite that combines Tranquility-themed with breathtaking where you can enjoy stunning sunsets over the water, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids"],
    pricePerNight: 160,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
