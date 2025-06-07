import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-new-orleans-6-room-5-Single-GardenView",
    name: "Serenity Single Penthouse",
    description: "Serenity-themed single penthouse with a view of tranquil water features, created with both style and function in mind and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 99,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-new-orleans-6-room-5-SofaBed-CityView",
    name: "Premium Sofa Bed Room",
    description: "Experience our traditional, room-filled sofa bed room with a window to the bustling city below, with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Elevator", "Hearing Support"],
    pricePerNight: 105,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-new-orleans-6-room-5-King-GardenView",
    name: "Premium King Loft",
    description: "A grandiose king retreat with a view of colorful flower beds, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 170,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-new-orleans-6-room-5-SofaBed-None",
    name: "Classic Sofa Bed Room",
    description: "Classic-themed room with modern decor, with a pleasant outlook, and with high-speed internet access.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 93,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
