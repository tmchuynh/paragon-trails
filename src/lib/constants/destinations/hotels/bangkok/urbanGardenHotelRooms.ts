import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-2-room-1",
    name: "Orchid Sofa Bed Room",
    description: "Experience our soft, refined sofa bed room with a view of snow-capped peaks, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Dining Table", "In-Room Safe", "Complimentary Bottled Water", "Flat-Screen TV", "Refrigerator"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 219,
    currency: "THB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
