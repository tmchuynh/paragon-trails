import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-6-room-5",
    name: "Classic King Penthouse",
    description:
      "This sophisticated king penthouse promises where you can enjoy the serenity of a garden retreat, enriched by Classic-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Bathtub",
      "In-Room Safe",
      "Luggage Rack",
      "Sauna",
      "Refrigerator",
    ],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 164,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
];
