import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-victoria-2-room-1",
    name: "Northern Lights King Penthouse",
    description: "Northern Lights-themed penthouse with fashionable decor, with a front-row seat to the city's heartbeat, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Outdoor Furniture", "Pet Friendly", "Board Games", "Jacuzzi Tub"],
    pricePerNight: 299,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-victoria-2-room-1",
    name: "Maple King Penthouse",
    description: "Maple-themed king penthouse where you can relax to the sound of the waves, blending urban sophistication with wilderness charm and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Dining Table", "Balcony", "Accessible Room"],
    pricePerNight: 380,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
