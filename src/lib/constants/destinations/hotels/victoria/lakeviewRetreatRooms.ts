import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lakeview Retreat
export const lakeviewRetreatRooms: RoomOption[] = [
  {
    id: "hotel-victoria-1-room-0",
    name: "Northern Lights Queen Studio",
    description: "This stylish queen studio promises featuring uninterrupted ocean vistas, enriched by Northern Lights-themed details and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Flat-Screen TV", "Family Room"],
    pricePerNight: 169,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
