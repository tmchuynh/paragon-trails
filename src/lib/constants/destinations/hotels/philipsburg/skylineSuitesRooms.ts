import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-5-room-4",
    name: "Lagoon King Villa",
    description: "This peaceful king villa promises where you can relax in a garden haven, enriched by Lagoon-themed details and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Family Room", "Complimentary Bottled Water", "Luggage Rack"],
    pricePerNight: 302,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
