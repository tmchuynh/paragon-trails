import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Dominion
export const theDominionRooms: RoomOption[] = [
  {
    id: "hotel-victoria-3-room-2",
    name: "Frontier King Villa",
    description: "Step into a glamorous king villa that combines Frontier-themed with breathtaking with a view of the city's waterfront, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Dining Table", "Seating Area", "Jacuzzi Tub", "Blackout Curtains"],
    pricePerNight: 156,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-victoria-3-room-2",
    name: "Premium Queen Penthouse",
    description: "Our gentle Premium-themed penthouse offers with a private balcony overlooking the sea, roomy comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Refrigerator", "Ironing Facilities", "Complimentary Bottled Water"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 157,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-victoria-3-room-2",
    name: "Maple Queen Studio",
    description: "Step into a tranquil queen studio that combines Maple-themed with breathtaking offering panoramic city vistas, complemented by with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Soundproofing", "Bluetooth Speaker", "Streaming Services"],
    pricePerNight: 131,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
