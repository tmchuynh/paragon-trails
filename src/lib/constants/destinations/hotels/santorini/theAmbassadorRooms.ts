import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-santorini-8-room-7-Double-CityView",
    name: "Luxury Double Apartment",
    description: "Unwind in this luxurious double apartment featuring a blend of modern and historic architecture, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 68,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-santorini-8-room-7-Single-OceanView",
    name: "Luxury Single Apartment",
    description: "Relax in our futuristic opulent single apartment featuring where you can enjoy the ocean's beauty, along with featuring premium bath amenities and featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 62,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-santorini-8-room-7-Queen-None",
    name: "Executive Queen Villa",
    description: "A welcoming queen retreat with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 71,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-santorini-8-room-7-SofaBed-None",
    name: "Signature Sofa Bed Villa",
    description: "Discover the charm of this Signature-themed sofa bed villa, complete with gentle ambiance, stunning with a pleasant outlook, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Elevator", "Visual Aids"],
    pricePerNight: 54,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
