import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-4-room-3",
    name: "Modern King Studio",
    description:
      "Our Modern-themed king studio offers stylish luxury, panoramic with stunning views of the city skyline, and with a luxurious soaking tub, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Ironing Facilities",
      "Accessible Room",
      "Outdoor Furniture",
    ],
    pricePerNight: 245,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
];
