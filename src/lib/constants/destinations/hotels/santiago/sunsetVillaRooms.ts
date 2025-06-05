import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-santiago-3-room-2",
    name: "Signature King Room",
    description: "Signature-themed room with deluxe decor, where you can watch the waves roll in, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Ironing Facilities", "Refrigerator"],
    pricePerNight: 483,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
