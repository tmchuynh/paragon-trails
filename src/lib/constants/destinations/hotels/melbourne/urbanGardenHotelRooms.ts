import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-5-room-4",
    name: "Koala Single Studio",
    description:
      "Step into a snug single studio that combines Koala-themed with breathtaking with a pleasant outlook, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
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
      "Kitchenette",
      "Flat-Screen TV",
    ],
    pricePerNight: 196,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
