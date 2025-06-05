import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-paris-4-room-3",
    name: "Superior Twin Room",
    description: "Superior-themed room with serene decor, with a view of the mountains' natural beauty, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Mini Bar", "Outdoor Furniture", "Streaming Services"],
    pricePerNight: 252,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
