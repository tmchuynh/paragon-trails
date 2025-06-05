import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-5-room-4",
    name: "Standard King Room",
    description: "Discover the charm of this Standard-themed king room, complete with large-scale ambiance, stunning with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "In-Room Safe", "Soundproofing", "Jacuzzi Tub"],
    pricePerNight: 167,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
