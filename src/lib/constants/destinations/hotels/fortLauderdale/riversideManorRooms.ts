import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-3-room-2",
    name: "Serenity King Room",
    description:
      "Unwind in this lavish king room with a front-row seat to the city's heartbeat, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
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
      "Dining Table",
      "Blackout Curtains",
      "Luggage Rack",
      "Bathtub",
      "Soundproofing",
      "Fireplace",
    ],
    pricePerNight: 149,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
