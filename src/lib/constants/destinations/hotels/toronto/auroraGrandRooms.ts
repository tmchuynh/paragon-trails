import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aurora Grand
export const auroraGrandRooms: RoomOption[] = [
  {
    id: "hotel-toronto-2-room-1",
    name: "Northern Lights King Apartment",
    description: "A tranquil king apartment designed for refreshing comfort, with where you can enjoy the city's energy and featuring a curated minibar selection, reflecting with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Complimentary Bottled Water", "Connecting Rooms"],
    pricePerNight: 287,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-toronto-2-room-1",
    name: "Superior King Room",
    description: "Unwind in this voluminous king room where the horizon meets the ocean, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Sauna", "Soundproofing"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 368,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
