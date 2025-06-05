import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-barcelona-4-room-3",
    name: "Horizon King Villa",
    description:
      "Enjoy a eclectic stay in our Horizon-themed king villa, offering where you can unwind in a garden paradise, with high-speed internet access, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Luggage Rack",
      "Bathtub",
      "Mini Bar",
      "Flat-Screen TV",
    ],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 166,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
];
