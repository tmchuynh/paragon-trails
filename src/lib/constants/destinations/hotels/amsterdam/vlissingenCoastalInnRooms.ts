import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Vlissingen Coastal Inn
export const vlissingenCoastalInnRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-1-room-0-Double-OceanView",
    name: "Delft Blue Double Studio",
    description: "Experience our compact, chic double studio overlooking the sparkling ocean waves, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 113,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-amsterdam-1-room-0-Double-GardenView",
    name: "Tulip Double Apartment",
    description: "Tulip-themed double apartment with a view of colorful flower beds, featuring modern design with Dutch influences and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-amsterdam-1-room-0-Single-MountainView",
    name: "Classic Single Penthouse",
    description: "Indulge in the minimalist atmosphere of our single penthouse, with spectacular where you can enjoy the mountains' majestic presence, with canal-inspired decor and cozy ambiance, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 81,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-amsterdam-1-room-0-Double-None",
    name: "Rembrandt Double Room",
    description: "Rembrandt-themed room with majestic decor, with a pleasant outlook, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
