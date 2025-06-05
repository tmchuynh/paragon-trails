import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-paris-1-room-0",
    name: "Harmony King Room",
    description: "Step into a artistic king room that combines Harmony-themed with breathtaking where you can watch the waves roll in, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Bathtub", "Accessible Room"],
    pricePerNight: 269,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-paris-1-room-0",
    name: "Horizon King Villa",
    description: "Experience our refined, stylish king villa where you can enjoy the tranquility of the mountains, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Smoke Detector", "Fitness Equipment", "Soundproofing", "Complimentary Bottled Water"],
    pricePerNight: 228,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
