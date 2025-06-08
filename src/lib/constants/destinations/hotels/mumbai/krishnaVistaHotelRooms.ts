import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Krishna Vista Hotel
export const krishnaVistaHotelRooms: RoomOption[] = [
  {
    id: "hotel-mumbai-6-room-5-SofaBed-CityView",
    name: "Holi Sofa Bed Penthouse",
    description: "A roomy sofa bed retreat where you can enjoy the city's energy, offering vibrant colors and luxurious details.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 652470,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-mumbai-6-room-5-Single-GardenView",
    name: "Signature Single Studio",
    description: "A elegant single retreat where you can relax in a garden haven, offering vibrant colors and luxurious details.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 530307,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-mumbai-6-room-5-SofaBed-None",
    name: "Premium Sofa Bed Loft",
    description: "Experience our soft, spacious sofa bed loft with a pleasant outlook, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 610119,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-mumbai-6-room-5-Queen-OceanView",
    name: "Executive Queen Room",
    description: "Discover the charm of this Executive-themed queen room, complete with well-proportioned ambiance, stunning where you can watch the waves roll in, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 963387,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
