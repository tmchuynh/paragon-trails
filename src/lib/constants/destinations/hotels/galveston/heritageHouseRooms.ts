import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-galveston-5-room-4",
    name: "Deluxe King Suite",
    description: "Step into a refined king suite that combines Deluxe-themed with breathtaking with a pleasant outlook, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Complimentary Bottled Water"],
    pricePerNight: 252,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
