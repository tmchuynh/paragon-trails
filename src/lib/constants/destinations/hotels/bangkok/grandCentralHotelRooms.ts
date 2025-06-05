import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-5-room-4",
    name: "Orchid King Penthouse",
    description:
      "Unwind in this soothing king penthouse with a pleasant outlook, offering a unique blend of style and comfort.",
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
      "Jacuzzi Tub",
      "Kitchenette",
      "Mini Bar",
      "Balcony",
      "Complimentary Bottled Water",
    ],
    pricePerNight: 139,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
];
