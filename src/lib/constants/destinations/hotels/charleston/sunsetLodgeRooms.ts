import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Lodge
export const sunsetLodgeRooms: RoomOption[] = [
  {
    id: "hotel-charleston-3-room-2",
    name: "Heritage King Apartment",
    description:
      "This room-filled king accommodation offers with a view of the endless blue, offering a classic yet modern American experience.",
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
      "Mini Bar",
      "Accessible Room",
    ],
    pricePerNight: 215,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
];
