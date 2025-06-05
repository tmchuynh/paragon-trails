import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Rockies Resort
export const rockiesResortRooms: RoomOption[] = [
  {
    id: "hotel-montreal-1-room-0",
    name: "Frontier King Loft",
    description:
      "Discover the charm of this Frontier-themed king loft, complete with welcoming ambiance, stunning where you can enjoy stunning sunsets over the water, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: [
      "Desk",
      "Free Wi-Fi",
      "Room Service",
      "Hair Dryer",
      "Toiletries",
      "Microwave",
      "Shower",
      "Heating",
      "Coffee Maker",
      "Slippers",
      "Bathrobe",
      "Room Service",
      "Alarm Clock",
      "Desk Lamp",
      "Daily Housekeeping",
      "Non-Smoking Room",
      "Television",
      "Air Conditioning",
      "Fitness Equipment",
      "Seating Area",
      "In-Room Safe",
      "Luggage Rack",
      "Accessible Room",
      "Refrigerator",
    ],
    pricePerNight: 171,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
];
