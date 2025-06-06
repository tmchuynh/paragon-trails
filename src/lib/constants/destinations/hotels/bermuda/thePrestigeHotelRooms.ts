import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-6-room-5",
    name: "Grotto King Loft",
    description: "Step into a majestic king loft that combines Grotto-themed with breathtaking with majestic mountain vistas, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Complimentary Bottled Water", "Ironing Facilities", "Blackout Curtains"],
    pricePerNight: 215,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-bermuda-6-room-5",
    name: "Atlantic King Penthouse",
    description: "Experience our inviting, broad king penthouse with a window to the bustling city below, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Accessible Room", "Soundproofing", "Bluetooth Speaker", "Refrigerator"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 174,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
