import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-5-room-4",
    name: "Serenity King Penthouse",
    description:
      "This ample king penthouse promises where you can enjoy the city's energy, enriched by Serenity-themed details and with plush bedding for ultimate comfort.",
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
      "Outdoor Furniture",
      "Fitness Equipment",
      "Seating Area",
      "Connecting Rooms",
    ],
    pricePerNight: 305,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
];
