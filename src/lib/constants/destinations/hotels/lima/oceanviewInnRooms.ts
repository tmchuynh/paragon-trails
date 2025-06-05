import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-lima-2-room-1",
    name: "Nazca King Apartment",
    description:
      "This grandiose king accommodation offers with a pleasant outlook, offering warm and inviting interiors.",
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
      "Soundproofing",
      "Books",
      "Streaming Services",
      "Complimentary Bottled Water",
      "Seating Area",
    ],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 147,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
];
