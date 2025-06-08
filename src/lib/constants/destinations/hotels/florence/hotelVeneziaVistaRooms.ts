import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hotel Venezia Vista
export const hotelVeneziaVistaRooms: RoomOption[] = [
  {
    id: "hotel-florence-2-room-1-King-None",
    name: "Tranquility King Suite",
    description: "This commodious king suite promises with a pleasant outlook, enriched by Tranquility-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 118,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-florence-2-room-1-Single-GardenView",
    name: "Tranquility Single Room",
    description: "Tranquility-themed single room with a view of blooming flowers and greenery, offering a touch of la dolce vita and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 76,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-florence-2-room-1-Queen-MountainView",
    name: "Tranquility Queen Apartment",
    description: "Indulge in the intimate atmosphere of our queen apartment, with spectacular where you can take in the fresh mountain air, inspired by Italian Renaissance design, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 116,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-florence-2-room-1-Single-MountainView",
    name: "Signature Single Apartment",
    description: "Signature-themed single apartment with panoramic views of the surrounding mountains, offering a touch of la dolce vita and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 93,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
