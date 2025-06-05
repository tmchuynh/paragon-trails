import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-bali-6-room-5",
    name: "Classic Single Room",
    description: "Step into a gentle single room that combines Classic-themed with breathtaking with a backdrop of city parks and green spaces, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Books", "Ironing Facilities"],
    pricePerNight: 72,
    currency: "IDR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
