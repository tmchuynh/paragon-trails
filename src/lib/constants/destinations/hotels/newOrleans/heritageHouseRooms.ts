import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-new-orleans-3-room-2",
    name: "Classic King Studio",
    description: "Indulge in the restful atmosphere of our king studio, with spectacular with a view of the mountains' breathtaking sunsets, created with both style and function in mind, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Smoke Detector", "Seating Area"],
    pricePerNight: 354,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-new-orleans-3-room-2",
    name: "Horizon King Suite",
    description: "Step into a room-filled king suite that combines Horizon-themed with breathtaking where you can take in the fresh air, complemented by with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Fireplace", "Refrigerator", "Board Games", "Accessible Room", "Ironing Facilities"],
    pricePerNight: 337,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
