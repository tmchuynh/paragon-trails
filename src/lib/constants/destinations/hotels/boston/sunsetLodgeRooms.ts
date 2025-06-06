import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-boston-1-room-0",
    name: "Golden Gate Queen Villa",
    description: "Golden Gate-themed queen villa with stunning views of the city skyline, with rustic and modern influences and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Connecting Rooms", "Luggage Rack", "Wake-Up Service", "In-Room Safe"],
    accessibilityFeatures: ["Hearing Support", "Wheelchair Accessible"],
    pricePerNight: 314,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-boston-1-room-0",
    name: "Pioneer Queen Villa",
    description: "Unwind in this futuristic queen villa where you can unwind in a garden paradise, with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Flat-Screen TV", "Mini Bar", "Blackout Curtains", "Streaming Services"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 300,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
