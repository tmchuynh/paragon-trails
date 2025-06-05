import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-paris-1-room-0",
    name: "Tranquility Single Loft",
    description: "Indulge in the vintage atmosphere of our single loft, with spectacular with a view of the city's cultural landmarks, featuring chic Parisian-inspired decor, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Books", "Balcony", "Soundproofing"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 89,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
