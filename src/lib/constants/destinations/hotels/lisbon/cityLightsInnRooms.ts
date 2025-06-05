import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-7-room-6",
    name: "Tranquility King Suite",
    description: "Indulge in the open-concept atmosphere of our king suite, with spectacular where you can enjoy the tranquility of the mountains, decorated with local artistic influences, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Family Room", "Soundproofing"],
    pricePerNight: 368,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-lisbon-7-room-6",
    name: "Horizon King Loft",
    description: "Relax in our sumptuous plush king loft featuring where you can enjoy the garden's seasonal blooms, along with with a modern en-suite bathroom and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Mini Bar", "Streaming Services"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 291,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
