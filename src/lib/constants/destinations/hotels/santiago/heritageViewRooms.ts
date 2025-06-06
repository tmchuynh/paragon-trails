import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-santiago-6-room-5",
    name: "Viña Sofa Bed Penthouse",
    description: "Step into a artistic sofa bed penthouse that combines Viña-themed with breathtaking with a pleasant outlook, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Balcony", "Kitchenette", "Blackout Curtains", "Board Games"],
    pricePerNight: 176,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
