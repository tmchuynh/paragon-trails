import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-oslo-2-room-1",
    name: "Classic King Penthouse",
    description:
      "Our chic Classic-themed penthouse offers where the city skyline meets the horizon, upscale comfort, and with blackout curtains for a perfect night's sleep.",
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
      "Sauna",
      "Board Games",
      "In-Room Safe",
      "Books",
      "Jacuzzi Tub",
    ],
    pricePerNight: 507,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
