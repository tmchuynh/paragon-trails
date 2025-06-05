import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rockies Resort
export const rockiesResortRooms: RoomOption[] = [
  {
    id: "hotel-toronto-4-room-3",
    name: "Timber King Studio",
    description: "Experience our airy, luxurious king studio with breathtaking sea views, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "In-Room Safe", "Jacuzzi Tub"],
    pricePerNight: 166,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
