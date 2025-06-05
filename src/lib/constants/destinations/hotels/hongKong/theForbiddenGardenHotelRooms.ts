import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Forbidden Garden Hotel
export const theForbiddenGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-2-room-1",
    name: "Serenity Sofa Bed Room",
    description: "Serenity-themed sofa bed room with panoramic views of the surrounding mountains, decorated with local artistic influences and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Outdoor Furniture", "Dining Table", "Books", "In-Room Safe", "Streaming Services"],
    pricePerNight: 276,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-hong-kong-2-room-1",
    name: "Classic Double Room",
    description: "Our inviting Classic-themed room offers where you can enjoy the ocean's beauty, peaceful comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Fitness Equipment", "Pet Friendly", "Blackout Curtains", "Books", "Streaming Services"],
    pricePerNight: 340,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
