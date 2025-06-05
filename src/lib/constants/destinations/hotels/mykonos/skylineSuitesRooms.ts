import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-mykonos-2-room-1",
    name: "Classic King Penthouse",
    description: "Classic-themed king penthouse where you can find inspiration in the mountains, designed for ultimate comfort and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Board Games", "Kitchenette", "Flat-Screen TV", "Pet Friendly", "Family Room"],
    pricePerNight: 326,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
