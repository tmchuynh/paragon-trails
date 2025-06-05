import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-seattle-1-room-0",
    name: "Pioneer King Studio",
    description: "A glamorous king studio designed for chic comfort, with showcasing the urban landscape and with a luxurious soaking tub, reflecting highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Sauna", "Pet Friendly", "Fitness Equipment"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 139,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
