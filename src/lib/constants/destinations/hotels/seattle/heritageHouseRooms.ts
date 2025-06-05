import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-seattle-3-room-2",
    name: "Colonial King Studio",
    description: "Colonial-themed studio with classic decor, where you can take in the fresh mountain air, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Books", "Balcony"],
    pricePerNight: 132,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
