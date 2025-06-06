import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-3-room-2",
    name: "Aztec King Room",
    description: "Aztec-themed room with palatial decor, with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Pet Friendly"],
    pricePerNight: 174,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-cozumel-3-room-2",
    name: "Mayan Queen Suite",
    description: "Experience our indulgent, wide-ranging queen suite with a view of iconic landmarks, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Ironing Facilities", "Seating Area", "Kitchenette", "Refrigerator"],
    pricePerNight: 145,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
