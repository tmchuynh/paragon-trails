import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-kiel-6-room-5",
    name: "Harmony King Loft",
    description: "Our Harmony-themed king loft offers snug luxury, panoramic with a view of the mountains' serene beauty, and with a spacious seating area, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Streaming Services", "Luggage Rack", "Mini Bar", "In-Room Safe"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 381,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
