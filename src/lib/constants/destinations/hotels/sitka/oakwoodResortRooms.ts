import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-sitka-4-room-3",
    name: "Classic King Studio",
    description: "Our serene Classic-themed studio offers where you can experience the beauty of nature, palatial comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Seating Area", "Soundproofing", "Accessible Room", "Dining Table", "Blackout Curtains"],
    accessibilityFeatures: ["Accessible Bathroom", "Elevator"],
    pricePerNight: 326,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
