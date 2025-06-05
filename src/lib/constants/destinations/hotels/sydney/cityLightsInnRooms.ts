import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-sydney-2-room-1",
    name: "Koala King Penthouse",
    description: "Our vast Koala-themed penthouse offers overlooking spectacular mountain ranges, traditional comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Balcony", "Jacuzzi Tub"],
    pricePerNight: 143,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-sydney-2-room-1",
    name: "Sunburnt King Studio",
    description: "A voluminous king studio designed for compact comfort, with featuring uninterrupted ocean vistas and with blackout curtains for a perfect night's sleep, reflecting offering a relaxed yet sophisticated Australian vibe.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Balcony", "In-Room Safe", "Board Games"],
    pricePerNight: 133,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
