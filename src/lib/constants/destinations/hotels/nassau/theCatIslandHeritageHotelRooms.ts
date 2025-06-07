import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Cat Island Heritage Hotel
export const theCatIslandHeritageHotelRooms: RoomOption[] = [
  {
    id: "hotel-nassau-3-room-2-Single-None",
    name: "Luxury Single Loft",
    description: "Indulge in the stylish atmosphere of our single loft, with spectacular with a pleasant outlook, featuring airy, light-filled interiors, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 75,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-nassau-3-room-2-SofaBed-OceanView",
    name: "Deluxe Sofa Bed Loft",
    description: "Indulge in the stylish atmosphere of our sofa bed loft, with spectacular with a view of the ocean's changing tides, featuring airy, light-filled interiors, and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Hearing Support", "Visual Aids", "Accessible Bathroom"],
    pricePerNight: 106,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-nassau-3-room-2-Twin-None",
    name: "Lagoon Twin Apartment",
    description: "Our pleasant Lagoon-themed apartment offers with a pleasant outlook, generous comfort, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 82,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-nassau-3-room-2-Queen-OceanView",
    name: "Superior Queen Room",
    description: "Our homey Superior-themed room offers with a view of the ocean's horizon, vast comfort, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids", "Elevator"],
    pricePerNight: 143,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
