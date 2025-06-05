import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-sitka-3-room-2",
    name: "Executive King Apartment",
    description: "Discover the charm of this Executive-themed king apartment, complete with serene ambiance, stunning with a front-row seat to the city's heartbeat, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Sauna", "Fitness Equipment", "Mini Bar"],
    pricePerNight: 379,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
