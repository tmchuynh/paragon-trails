import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Quantum Stay Plaza
export const quantumStayPlazaRooms: RoomOption[] = [
  {
    id: "hotel-port-vila-6-room-5-Single-None",
    name: "Tranquility Single Room",
    description: "Our industrial Tranquility-themed room offers with a pleasant outlook, ample comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 9485,
    currency: "VUV",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-port-vila-6-room-5-Queen-OceanView",
    name: "Modern Queen Studio",
    description: "A comfortable queen studio designed for relaxing comfort, with with a view of the ocean's changing tides and including climate control for your comfort, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 19052,
    currency: "VUV",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-port-vila-6-room-5-King-OceanView",
    name: "Horizon King Studio",
    description: "This inviting king accommodation offers where you can watch the waves roll in, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 19226,
    currency: "VUV",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-port-vila-6-room-5-Double-None",
    name: "Superior Double Loft",
    description: "Enjoy a wide-ranging stay in our Superior-themed double loft, offering with a pleasant outlook, equipped with all the modern conveniences, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 11908,
    currency: "VUV",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
