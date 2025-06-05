import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-boston-4-room-3",
    name: "Golden Gate King Studio",
    description: "Indulge in the large-scale atmosphere of our king studio, with spectacular with a view of the mountains' breathtaking sunsets, with rustic and modern influences, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Accessible Room", "Board Games"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 170,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
