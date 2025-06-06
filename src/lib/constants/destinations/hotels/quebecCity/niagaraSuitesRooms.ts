import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Niagara Suites
export const niagaraSuitesRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-1-room-0",
    name: "Tranquility Double Loft",
    description: "Tranquility-themed double loft with a pleasant outlook, featuring thoughtful design elements and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Soundproofing", "Jacuzzi Tub", "Family Room"],
    pricePerNight: 124,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
