import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-santorini-1-room-0",
    name: "Harmony King Studio",
    description:
      "Our Harmony-themed king studio offers exquisite luxury, panoramic where you can enjoy the tranquility of the mountains, and including climate control for your comfort, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
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
      "Bathtub",
      "Pet Friendly",
      "Luggage Rack",
      "Soundproofing",
      "Complimentary Bottled Water",
      "Dining Table",
    ],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 132,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
