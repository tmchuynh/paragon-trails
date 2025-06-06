import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-montreal-1-room-0",
    name: "Timber Single Room",
    description: "Discover the charm of this Timber-themed single room, complete with gentle ambiance, stunning with a pleasant outlook, and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Outdoor Furniture", "Refrigerator", "Mini Bar", "Connecting Rooms"],
    pricePerNight: 228,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
