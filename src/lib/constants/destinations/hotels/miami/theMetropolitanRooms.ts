import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-miami-6-room-5",
    name: "Colonial Queen Villa",
    description: "Enjoy a minimalist stay in our Colonial-themed queen villa, offering with a window to the bustling city below, with a spacious work area, and unique touches of highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Jacuzzi Tub", "Family Room", "Streaming Services"],
    pricePerNight: 124,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
