import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-2-room-1",
    name: "Tranquility Single Room",
    description:
      "A calming single retreat with a view of the ocean's changing tides, featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
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
      "Bathtub",
      "Dining Table",
      "Balcony",
      "Family Room",
      "Fitness Equipment",
      "Kitchenette",
    ],
    pricePerNight: 200,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
];
