import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-2-room-1",
    name: "Horizon King Suite",
    description: "A elegant king suite designed for fashionable comfort, with with stunning views of the city skyline and with a modern en-suite bathroom, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Connecting Rooms", "Luggage Rack"],
    pricePerNight: 347,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-dubrovnik-2-room-1",
    name: "Harmony King Room",
    description: "Step into a airy king room that combines Harmony-themed with breathtaking where the horizon meets the ocean, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Wake-Up Service", "Bluetooth Speaker", "Blackout Curtains"],
    pricePerNight: 404,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
