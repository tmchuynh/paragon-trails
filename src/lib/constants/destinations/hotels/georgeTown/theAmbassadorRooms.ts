import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-george-town-1-room-0",
    name: "Modern Single Penthouse",
    description: "A calming single penthouse designed for palatial comfort, with with a pleasant outlook and complete with a well-appointed bathroom, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "In-Room Safe", "Outdoor Furniture", "Ironing Facilities"],
    pricePerNight: 219,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
