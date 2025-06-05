import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-2-room-1",
    name: "Tranquility Single Suite",
    description: "Step into a fashionable single suite that combines Tranquility-themed with breathtaking with a view of the garden's seasonal changes, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Smoke Detector", "Connecting Rooms"],
    pricePerNight: 167,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-quebec-city-2-room-1",
    name: "Tranquility Single Room",
    description: "This eclectic single room promises with a view of the tranquil sea, enriched by Tranquility-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "In-Room Safe", "Board Games"],
    pricePerNight: 210,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-quebec-city-2-room-1",
    name: "Modern Double Suite",
    description: "Indulge in the wide-ranging atmosphere of our double suite, with spectacular where you can enjoy the garden's peaceful atmosphere, featuring thoughtful design elements, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Dining Table", "Fitness Equipment", "Pet Friendly"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 232,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
