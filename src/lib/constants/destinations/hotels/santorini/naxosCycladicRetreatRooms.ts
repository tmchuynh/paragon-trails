import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Naxos Cycladic Retreat
export const naxosCycladicRetreatRooms: RoomOption[] = [
  {
    id: "hotel-santorini-12-room-11-Double-GardenView",
    name: "Parthenon Double Room",
    description: "Enjoy a lavish stay in our Parthenon-themed double room, offering where you can unwind in a garden paradise, including climate control for your comfort, and unique touches of with classic Greek architectural elements and modern comforts.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 96,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-santorini-12-room-11-SofaBed-MountainView",
    name: "Aegean Sofa Bed Apartment",
    description: "Aegean-themed sofa bed apartment with a view of the mountains' breathtaking sunsets, blending traditional style with luxurious amenities and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 93,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-santorini-12-room-11-Double-None",
    name: "Superior Double Room",
    description: "Unwind in this broad double room with a pleasant outlook, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 79,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-santorini-12-room-11-Single-OceanView",
    name: "Classic Single Room",
    description: "A artistic single retreat with a panoramic view of the coastline, featuring Aegean-inspired decor with blue and white tones.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 77,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
