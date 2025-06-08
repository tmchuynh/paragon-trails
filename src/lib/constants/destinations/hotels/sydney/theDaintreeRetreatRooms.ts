import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Daintree Retreat
export const theDaintreeRetreatRooms: RoomOption[] = [
  {
    id: "hotel-sydney-4-room-3-Queen-GardenView",
    name: "Superior Queen Loft",
    description: "Unwind in this sleek queen loft with a view of the garden's lush greenery, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 746,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-sydney-4-room-3-Double-None",
    name: "Standard Double Studio",
    description: "Enjoy a vast stay in our Standard-themed double studio, offering with a pleasant outlook, with carefully selected furnishings, and unique touches of with coastal and Outback influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 550,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-sydney-4-room-3-Single-OceanView",
    name: "Classic Single Apartment",
    description: "A comfortable single apartment designed for upscale comfort, with with a view of the ocean's changing tides and equipped with all the modern conveniences, reflecting with coastal and Outback influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 602,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-sydney-4-room-3-King-None",
    name: "Deluxe King Apartment",
    description: "Our tranquil Deluxe-themed apartment offers with a pleasant outlook, sumptuous comfort, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 837,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
