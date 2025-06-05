import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-seattle-4-room-3",
    name: "Standard King Penthouse",
    description: "Our airy Standard-themed penthouse offers with a window to the bustling city below, palatial comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Refrigerator", "Books", "Mini Bar"],
    pricePerNight: 166,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-seattle-4-room-3",
    name: "Liberty King Loft",
    description: "Experience our grandiose, calming king loft where the horizon meets the ocean, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Pet Friendly", "Kitchenette", "Complimentary Bottled Water", "Mini Bar", "Balcony"],
    pricePerNight: 177,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
