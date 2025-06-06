import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-los-angeles-3-room-2",
    name: "Tranquility Twin Penthouse",
    description:
      "This expansive twin accommodation offers where you can enjoy the mountains' majestic presence, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
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
      "Ironing Facilities",
      "Kitchenette",
      "In-Room Safe",
      "Family Room",
      "Connecting Rooms",
      "Outdoor Furniture",
    ],
    pricePerNight: 294,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
];
