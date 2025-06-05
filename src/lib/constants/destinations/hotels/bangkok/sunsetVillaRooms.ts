import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-4-room-3",
    name: "Emerald King Penthouse",
    description: "A majestic king retreat offering panoramic city vistas, blending Thai elegance with modern comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Complimentary Bottled Water", "Smoke Detector", "Jacuzzi Tub", "Flat-Screen TV"],
    pricePerNight: 146,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
