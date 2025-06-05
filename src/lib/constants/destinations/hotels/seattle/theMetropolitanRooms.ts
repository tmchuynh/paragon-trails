import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-seattle-2-room-1",
    name: "Liberty King Apartment",
    description:
      "Unwind in this vintage king apartment with a pleasant outlook, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Mini Bar",
      "Blackout Curtains",
      "Refrigerator",
      "Balcony",
      "Fireplace",
      "Fitness Equipment",
    ],
    pricePerNight: 130,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
