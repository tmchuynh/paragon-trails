import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-athens-3-room-2",
    name: "Tranquility King Room",
    description:
      "Discover the charm of this Tranquility-themed king room, complete with well-proportioned ambiance, stunning where city lights twinkle at night, and with a private balcony or terrace.",
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
      "Bluetooth Speaker",
      "In-Room Safe",
      "Bathtub",
      "Connecting Rooms",
    ],
    pricePerNight: 287,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
];
