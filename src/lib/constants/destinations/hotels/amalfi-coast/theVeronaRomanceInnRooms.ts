import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Verona Romance Inn
export const theVeronaRomanceInnRooms: RoomOption[] = [
  {
    id: "hotel-amalfi-coast-8-room-7-Twin-OceanView",
    name: "Standard Twin Loft",
    description: "This artistic twin loft promises where you can hear the soothing sound of the sea, enriched by Standard-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 115,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-amalfi-coast-8-room-7-SofaBed-MountainView",
    name: "Executive Sofa Bed Room",
    description: "Relax in our palatial broad sofa bed room featuring where you can enjoy the mountains' majestic presence, along with with a modern en-suite bathroom and decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 102,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-amalfi-coast-8-room-7-King-None",
    name: "Horizon King Suite",
    description: "Our Horizon-themed king suite offers exquisite luxury, panoramic with a pleasant outlook, and with plush bedding for ultimate comfort, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 128,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-amalfi-coast-8-room-7-Single-None",
    name: "Premium Single Apartment",
    description: "Indulge in the futuristic atmosphere of our single apartment, with spectacular with a pleasant outlook, decorated with local artistic influences, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 69,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
