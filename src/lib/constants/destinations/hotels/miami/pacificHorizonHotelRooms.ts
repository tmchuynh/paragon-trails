import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-miami-3-room-2",
    name: "Heritage Single Room",
    description: "A extravagant single retreat with a view of the ocean's horizon, highlighting contemporary American style.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Fireplace", "Wake-Up Service", "Books"],
    pricePerNight: 216,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
