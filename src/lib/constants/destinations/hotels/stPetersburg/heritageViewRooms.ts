import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-4-room-3",
    name: "Modern King Penthouse",
    description:
      "Experience our snug, bohemian king penthouse featuring a blend of modern and historic architecture, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Fireplace",
      "In-Room Safe",
      "Books",
      "Pet Friendly",
      "Blackout Curtains",
    ],
    pricePerNight: 281,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
