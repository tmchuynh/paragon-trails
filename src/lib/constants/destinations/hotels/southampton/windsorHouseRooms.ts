import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Windsor House
export const windsorHouseRooms: RoomOption[] = [
  {
    id: "hotel-southampton-2-room-1",
    name: "Victorian King Room",
    description:
      "Our stylish Victorian-themed room offers with a view of the mountains' changing seasons, retro comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Mini Bar",
      "Refrigerator",
      "Flat-Screen TV",
    ],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 164,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
