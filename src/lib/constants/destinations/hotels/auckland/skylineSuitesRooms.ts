import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-auckland-4-room-3",
    name: "Bayview King Apartment",
    description: "Step into a deluxe king apartment that combines Bayview-themed with breathtaking where you can enjoy the ocean's beauty, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Connecting Rooms", "Kitchenette"],
    accessibilityFeatures: ["Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 216,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
