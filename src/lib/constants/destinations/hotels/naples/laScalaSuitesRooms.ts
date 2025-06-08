import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for La Scala Suites
export const laScalaSuitesRooms: RoomOption[] = [
  {
    id: "hotel-naples-11-room-10-Single-OceanView",
    name: "Luxury Single Suite",
    description: "This upscale single suite promises with a view of the ocean's changing tides, enriched by Luxury-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 217,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-naples-11-room-10-Single-None",
    name: "Standard Single Suite",
    description: "A avant-garde single suite designed for comfy comfort, with with a pleasant outlook and featuring a curated minibar selection, reflecting with classic Italian elegance.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 189,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-naples-11-room-10-King-None",
    name: "Classic King Penthouse",
    description: "Discover the charm of this Classic-themed king penthouse, complete with exquisite ambiance, stunning with a pleasant outlook, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 342,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-naples-11-room-10-Twin-GardenView",
    name: "Superior Twin Villa",
    description: "Indulge in the artistic atmosphere of our twin villa, with spectacular where you can enjoy the beauty of nature, inspired by Italian Renaissance design, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    accessibilityFeatures: ["Hearing Support", "Accessible Bathroom", "Visual Aids"],
    pricePerNight: 214,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
