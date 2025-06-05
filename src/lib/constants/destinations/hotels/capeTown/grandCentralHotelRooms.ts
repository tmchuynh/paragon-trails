import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-5-room-4",
    name: "Classic King Studio",
    description:
      "Step into a compact king studio that combines Classic-themed with breathtaking where you can feel the ocean breeze, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
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
      "Fireplace",
      "Luggage Rack",
      "Balcony",
    ],
    pricePerNight: 186,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
];
