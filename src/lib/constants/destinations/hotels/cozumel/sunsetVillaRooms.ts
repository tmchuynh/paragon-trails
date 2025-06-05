import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-2-room-1",
    name: "Superior King Studio",
    description: "Experience our soft, comfortable king studio overlooking the vibrant cityscape, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Mini Bar", "Board Games", "Seating Area"],
    pricePerNight: 139,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
