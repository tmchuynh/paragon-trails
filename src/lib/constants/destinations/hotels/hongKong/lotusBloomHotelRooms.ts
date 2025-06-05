import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Lotus Bloom Hotel
export const lotusBloomHotelRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-5-room-4",
    name: "Modern King Villa",
    description:
      "Relax in our extravagant stretching king villa featuring with a view of snow-capped peaks, along with complete with a well-appointed bathroom and designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Mini Bar",
      "Refrigerator",
      "Jacuzzi Tub",
    ],
    pricePerNight: 416,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
];
