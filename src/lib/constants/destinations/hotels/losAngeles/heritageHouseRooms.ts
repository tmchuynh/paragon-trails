import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-4-room-3",
    name: "Harmony King Apartment",
    description: "Unwind in this indulgent king apartment with a backdrop of city parks and green spaces, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Dining Table", "Streaming Services"],
    pricePerNight: 199,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
