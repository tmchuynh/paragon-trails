import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hix Island House
export const hixIslandHouseRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-6-room-5-Single-OceanView",
    name: "Signature Single Studio",
    description: "Unwind in this extravagant single studio with a panoramic view of the coastline, including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 191,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-san-juan-6-room-5-King-None",
    name: "Premium King Loft",
    description: "A airy king retreat with a pleasant outlook, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 276,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-san-juan-6-room-5-Double-None",
    name: "Standard Double Suite",
    description: "Our Standard-themed double suite offers intimate luxury, panoramic with a pleasant outlook, and with a modern en-suite bathroom, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 191,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-san-juan-6-room-5-Single-GardenView",
    name: "Modern Single Suite",
    description: "Unwind in this luxurious single suite where you can escape to a green sanctuary, with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Visual Aids", "Hearing Support"],
    pricePerNight: 167,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
