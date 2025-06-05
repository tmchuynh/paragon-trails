import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-singapore-3-room-2",
    name: "Skyline King Studio",
    description: "A homey king studio designed for luxurious comfort, with where the mountains touch the sky and with a spacious work area, reflecting with modern luxury and tropical influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Bathtub", "Board Games", "Streaming Services", "Seating Area", "Connecting Rooms"],
    pricePerNight: 322,
    currency: "SGD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
