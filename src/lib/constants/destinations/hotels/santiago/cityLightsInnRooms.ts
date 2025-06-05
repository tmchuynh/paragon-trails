import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-santiago-5-room-4",
    name: "Torres del Paine King Loft",
    description: "Our pleasant Torres del Paine-themed loft offers with a pleasant outlook, spacious comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Bathtub", "Blackout Curtains", "Kitchenette", "Fireplace", "Jacuzzi Tub"],
    accessibilityFeatures: ["Visual Aids", "Hearing Support"],
    pricePerNight: 303,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
