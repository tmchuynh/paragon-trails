import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pulse Hotel Downtown
export const pulseHotelDowntownRooms: RoomOption[] = [
  {
    id: "hotel-fiji-2-room-1-SofaBed-MountainView",
    name: "Serenity Sofa Bed Villa",
    description: "Serenity-themed sofa bed villa where you can enjoy the tranquility of the mountains, created with both style and function in mind and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 661,
    currency: "FJD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-fiji-2-room-1-Double-GardenView",
    name: "Deluxe Double Loft",
    description: "Step into a deluxe double loft that combines Deluxe-themed with breathtaking where you can enjoy the sights and sounds of nature, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 706,
    currency: "FJD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-fiji-2-room-1-Single-None",
    name: "Modern Single Studio",
    description: "Step into a extensive single studio that combines Modern-themed with breathtaking with a pleasant outlook, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 484,
    currency: "FJD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-fiji-2-room-1-Double-OceanView",
    name: "Deluxe Double Penthouse",
    description: "Step into a tranquil double penthouse that combines Deluxe-themed with breathtaking where you can enjoy stunning sunsets over the water, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 758,
    currency: "FJD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
