import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-glacier-bay-3-room-2",
    name: "Modern Double Loft",
    description:
      "Experience our ornate, exquisite double loft with a view of the garden's natural beauty, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
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
      "Complimentary Bottled Water",
      "Refrigerator",
      "Flat-Screen TV",
      "Smoke Detector",
    ],
    pricePerNight: 170,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
