import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Hikari Hotel
export const hikariHotelRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-5-room-4",
    name: "Bamboo King Apartment",
    description:
      "A bohemian king retreat with a pleasant outlook, with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 2,
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
      "Dining Table",
      "Mini Bar",
      "Bluetooth Speaker",
      "Jacuzzi Tub",
      "Refrigerator",
      "Bathtub",
    ],
    pricePerNight: 166,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
];
