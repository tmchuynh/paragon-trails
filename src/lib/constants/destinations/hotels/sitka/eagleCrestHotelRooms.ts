import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-sitka-2-room-1",
    name: "Golden Gate King Penthouse",
    description: "Experience our majestic, large-scale king penthouse with a pleasant outlook, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Outdoor Furniture", "Connecting Rooms", "Refrigerator", "Blackout Curtains", "Bathtub"],
    pricePerNight: 337,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
