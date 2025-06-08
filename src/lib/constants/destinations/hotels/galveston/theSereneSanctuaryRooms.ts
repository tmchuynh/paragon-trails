import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Serene Sanctuary
export const theSereneSanctuaryRooms: RoomOption[] = [
  {
    id: "hotel-galveston-1-room-0-Single-GardenView",
    name: "Signature Single Apartment",
    description: "Experience our chic, vast single apartment with a view of colorful flower beds, with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 100,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-galveston-1-room-0-Twin-None",
    name: "Signature Twin Apartment",
    description: "Our chic Signature-themed apartment offers with a pleasant outlook, classic comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 88,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-galveston-1-room-0-Double-GardenView",
    name: "Executive Double Villa",
    description: "Unwind in this sophisticated double villa where you can enjoy the tranquility of nature, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 122,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-galveston-1-room-0-King-OceanView",
    name: "Deluxe King Studio",
    description: "A expansive king retreat with a view of the tranquil sea, highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 191,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
