import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-3-room-2",
    name: "Luxury King Villa",
    description: "A sophisticated king villa designed for prestigious comfort, with overlooking the sparkling ocean waves and with a private balcony or terrace, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Complimentary Bottled Water", "Books", "Board Games"],
    pricePerNight: 190,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-san-juan-3-room-2",
    name: "Harmony King Room",
    description: "A stylish king retreat where you can enjoy the mountains' majestic presence, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Jacuzzi Tub", "Dining Table"],
    pricePerNight: 175,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
