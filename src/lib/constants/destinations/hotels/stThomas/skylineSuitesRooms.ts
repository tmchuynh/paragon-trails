import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-5-room-4",
    name: "Harmony King Loft",
    description:
      "Our Harmony-themed king loft offers contemporary luxury, panoramic with a backdrop of city parks and green spaces, and with plush bedding for ultimate comfort, inspired by created with both style and function in mind.",
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
      "Mini Bar",
      "Streaming Services",
      "Seating Area",
      "Pet Friendly",
      "Luggage Rack",
      "In-Room Safe",
    ],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 165,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
