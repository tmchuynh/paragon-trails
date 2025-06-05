import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-3-room-2",
    name: "Colonial King Apartment",
    description: "Step into a wide-ranging king apartment that combines Colonial-themed with breathtaking where you can relax to the sound of the waves, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Balcony", "Fireplace"],
    pricePerNight: 151,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
