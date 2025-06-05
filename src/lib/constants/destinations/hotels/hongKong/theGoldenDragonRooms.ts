import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Golden Dragon
export const theGoldenDragonRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Harmony King Villa",
    description: "Enjoy a intimate stay in our Harmony-themed king villa, offering with a pleasant outlook, with high-speed internet access, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Kitchenette", "Books"],
    pricePerNight: 309,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
