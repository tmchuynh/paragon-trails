import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-copenhagen-1-room-0",
    name: "Premium King Room",
    description: "Experience our minimalist, snug king room with stunning views of the city skyline, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Board Games", "Ironing Facilities"],
    pricePerNight: 389,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
