import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mt. Fuji View Hotel
export const mt.FujiViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-tokyo-3-room-2",
    name: "Zen Queen Apartment",
    description: "Step into a vintage queen apartment that combines Zen-themed with breathtaking with panoramic views of the mountain landscape, complemented by with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Fireplace", "Bathtub", "Refrigerator", "Books"],
    pricePerNight: 146,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
