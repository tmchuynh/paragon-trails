import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pearl River Suites
export const pearlRiverSuitesRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-1-room-0",
    name: "Silk Sofa Bed Loft",
    description: "Silk-themed loft with intimate decor, where mountains paint the horizon, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Luggage Rack", "Dining Table", "Streaming Services"],
    pricePerNight: 136,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-shanghai-1-room-0",
    name: "Deluxe Sofa Bed Villa",
    description: "Indulge in the cozy atmosphere of our sofa bed villa, with spectacular where city lights twinkle at night, blending imperial tradition with modern design, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Jacuzzi Tub", "Bathtub", "Fitness Equipment", "Fireplace"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 118,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
