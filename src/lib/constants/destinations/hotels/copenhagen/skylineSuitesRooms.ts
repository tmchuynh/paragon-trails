import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-copenhagen-4-room-3",
    name: "Serenity Twin Room",
    description:
      "This stretching twin room promises featuring a blend of modern and historic architecture, enriched by Serenity-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
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
      "Bathtub",
      "Pet Friendly",
      "Complimentary Bottled Water",
      "Blackout Curtains",
    ],
    pricePerNight: 133,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
