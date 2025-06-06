import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-2-room-1",
    name: "Horizon Single Room",
    description: "Discover the charm of this Horizon-themed single room, complete with large-scale ambiance, stunning with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Connecting Rooms", "Luggage Rack"],
    pricePerNight: 160,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-quebec-city-2-room-1",
    name: "Horizon Single Apartment",
    description: "Horizon-themed apartment with plush decor, with a view of the mountains' natural beauty, and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Bathtub", "Books", "Connecting Rooms"],
    pricePerNight: 203,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
