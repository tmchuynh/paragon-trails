import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-kiel-7-room-6",
    name: "Serenity King Penthouse",
    description:
      "Discover the charm of this Serenity-themed king penthouse, complete with cozy ambiance, stunning with a pleasant outlook, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Accessible Room",
      "Jacuzzi Tub",
      "Pet Friendly",
      "Seating Area",
      "Complimentary Bottled Water",
    ],
    pricePerNight: 105,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
