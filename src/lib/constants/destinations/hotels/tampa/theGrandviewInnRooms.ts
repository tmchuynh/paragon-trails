import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-tampa-4-room-3",
    name: "Standard Double Villa",
    description: "Standard-themed double villa with a view of shaded garden paths, highlighting contemporary American style and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Bathtub", "In-Room Safe", "Mini Bar", "Books"],
    pricePerNight: 103,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-tampa-4-room-3",
    name: "Colonial Queen Room",
    description: "Discover the charm of this Colonial-themed queen room, complete with compact ambiance, stunning with a view of blooming flowers and greenery, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Streaming Services", "Fitness Equipment", "Wake-Up Service", "Family Room"],
    pricePerNight: 140,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
