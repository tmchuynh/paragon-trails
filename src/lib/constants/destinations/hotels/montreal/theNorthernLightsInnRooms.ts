import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-montreal-4-room-3",
    name: "Signature King Loft",
    description:
      "This spacious king loft promises with a pleasant outlook, enriched by Signature-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
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
      "Seating Area",
      "Books",
      "Mini Bar",
    ],
    pricePerNight: 91,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
