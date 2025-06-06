import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-amalfi-coast-2-room-1",
    name: "Serenity Sofa Bed Loft",
    description: "Discover the charm of this Serenity-themed sofa bed loft, complete with exquisite ambiance, stunning with a view of the tranquil sea, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Wake-Up Service", "Fireplace", "Ironing Facilities"],
    pricePerNight: 364,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
