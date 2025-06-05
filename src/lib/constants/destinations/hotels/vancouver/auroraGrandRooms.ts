import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aurora Grand
export const auroraGrandRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-5-room-4",
    name: "Northern Lights King Studio",
    description: "Our chic Northern Lights-themed studio offers with a view of the city's waterfront, sleek comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "In-Room Safe", "Bathtub"],
    pricePerNight: 278,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
