import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-nassau-2-room-1",
    name: "Lagoon Double Apartment",
    description: "Our generous Lagoon-themed apartment offers with a view of the garden's natural beauty, intimate comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Fitness Equipment", "Kitchenette", "Mini Bar"],
    pricePerNight: 293,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
