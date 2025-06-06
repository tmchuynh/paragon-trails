import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-dubai-2-room-1",
    name: "Mirage Queen Studio",
    description: "Mirage-themed studio with prestigious decor, where the city comes alive at dusk, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Fireplace", "Smoke Detector", "Soundproofing", "Complimentary Bottled Water"],
    pricePerNight: 346,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
