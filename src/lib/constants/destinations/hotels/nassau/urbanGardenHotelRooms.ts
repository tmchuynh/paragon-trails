import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-nassau-6-room-5",
    name: "Lagoon King Villa",
    description: "Our sleek Lagoon-themed villa offers showcasing the urban landscape, soft comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Fitness Equipment", "Accessible Room"],
    pricePerNight: 157,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-nassau-6-room-5",
    name: "Breeze King Penthouse",
    description: "A roomy king penthouse designed for spacious comfort, with where the ocean meets the sky and featuring a curated minibar selection, reflecting featuring airy, light-filled interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Fitness Equipment", "Soundproofing", "Bathtub"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible"],
    pricePerNight: 183,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
