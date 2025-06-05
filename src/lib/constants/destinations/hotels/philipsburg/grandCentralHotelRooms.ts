import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-5-room-4",
    name: "Tropical Sky King Penthouse",
    description:
      "A regal king penthouse designed for contemporary comfort, with with a view of iconic landmarks and including climate control for your comfort, reflecting featuring bright, cheerful decor.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Seating Area",
      "Luggage Rack",
      "Refrigerator",
      "Streaming Services",
      "Dining Table",
      "Accessible Room",
    ],
    pricePerNight: 392,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
