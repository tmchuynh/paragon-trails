import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-1-room-0",
    name: "Classic King Studio",
    description: "Step into a deluxe king studio that combines Classic-themed with breathtaking with a pleasant outlook, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Bluetooth Speaker", "Fireplace", "Books", "Board Games"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 306,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
