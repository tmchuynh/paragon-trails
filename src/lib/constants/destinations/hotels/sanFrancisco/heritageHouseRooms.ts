import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-1-room-0",
    name: "Classic King Villa",
    description: "Our Classic-themed king villa offers stylish luxury, panoramic offering panoramic city vistas, and with blackout curtains for a perfect night's sleep, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Soundproofing", "Mini Bar"],
    pricePerNight: 282,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-san-francisco-1-room-0",
    name: "Tranquility King Studio",
    description: "This opulent king accommodation offers with breathtaking sea views, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Bluetooth Speaker", "Fireplace"],
    pricePerNight: 382,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
