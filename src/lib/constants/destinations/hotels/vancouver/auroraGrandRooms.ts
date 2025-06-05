import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aurora Grand
export const auroraGrandRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-4-room-3",
    name: "Premium King Loft",
    description: "Enjoy a lavish stay in our Premium-themed king loft, offering with a view of the rugged mountain landscape, with blackout curtains for a perfect night's sleep, and unique touches of blending urban sophistication with wilderness charm.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Fireplace", "Fitness Equipment", "Soundproofing", "Refrigerator"],
    pricePerNight: 166,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
