import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-6-room-5",
    name: "Modern King Penthouse",
    description: "A welcoming king penthouse designed for exquisite comfort, with with stunning views of the city skyline and complete with a well-appointed bathroom, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Books", "Accessible Room", "Streaming Services", "In-Room Safe"],
    accessibilityFeatures: ["Wheelchair Accessible", "Hearing Support"],
    pricePerNight: 162,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
