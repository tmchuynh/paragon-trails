import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-auckland-6-room-5",
    name: "Southern Cross King Loft",
    description: "A room-filled king retreat with a view of the city's waterfront, showcasing the serene beauty of New Zealand landscapes.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Board Games", "Mini Bar", "Balcony"],
    pricePerNight: 177,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
