import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-oslo-1-room-0",
    name: "Modern Single Studio",
    description:
      "This stretching single accommodation offers where you can enjoy the city's energy, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
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
      "Mini Bar",
      "Refrigerator",
      "Complimentary Bottled Water",
      "Outdoor Furniture",
      "Jacuzzi Tub",
      "Seating Area",
    ],
    accessibilityFeatures: ["Visual Aids", "Hearing Support"],
    pricePerNight: 181,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
];
