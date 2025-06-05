import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-6-room-5",
    name: "Bushland King Studio",
    description:
      "Unwind in this room-filled king studio where you can find inspiration in the mountains, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
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
      "Mini Bar",
      "Streaming Services",
      "Fireplace",
      "Refrigerator",
      "Luggage Rack",
    ],
    pricePerNight: 456,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
