import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-santorini-2-room-1",
    name: "Modern King Penthouse",
    description:
      "Discover the charm of this Modern-themed king penthouse, complete with avant-garde ambiance, stunning with a pleasant outlook, and including climate control for your comfort.",
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
      "Bluetooth Speaker",
      "Smoke Detector",
      "Seating Area",
      "Blackout Curtains",
    ],
    pricePerNight: 360,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
];
