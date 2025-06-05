import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The White Rose
export const theWhiteRoseRooms: RoomOption[] = [
  {
    id: "hotel-southampton-3-room-2",
    name: "Signature King Studio",
    description:
      "Discover the charm of this Signature-themed king studio, complete with inviting ambiance, stunning with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
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
      "Kitchenette",
      "Sauna",
      "Pet Friendly",
      "Streaming Services",
      "In-Room Safe",
    ],
    pricePerNight: 164,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
];
