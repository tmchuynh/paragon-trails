import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-1-room-0",
    name: "Deluxe King Suite",
    description:
      "Relax in our retro palatial king suite featuring surrounded by vibrant flora, along with with a spacious seating area and designed for ultimate comfort.",
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
      "Outdoor Furniture",
      "Seating Area",
      "Ironing Facilities",
      "Refrigerator",
      "Luggage Rack",
    ],
    pricePerNight: 292,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
];
