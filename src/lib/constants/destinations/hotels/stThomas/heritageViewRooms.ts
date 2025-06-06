import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-3-room-2",
    name: "Deluxe King Room",
    description: "A well-proportioned king retreat with majestic mountain vistas, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Connecting Rooms", "Refrigerator", "Family Room", "Ironing Facilities"],
    pricePerNight: 210,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
