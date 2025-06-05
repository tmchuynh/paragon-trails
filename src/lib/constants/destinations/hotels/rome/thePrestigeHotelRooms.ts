import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-rome-4-room-3",
    name: "Tranquility King Apartment",
    description:
      "Enjoy a comfortable stay in our Tranquility-themed king apartment, offering with a pleasant outlook, with a modern en-suite bathroom, and unique touches of offering a touch of la dolce vita.",
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
      "Refrigerator",
      "Dining Table",
      "Kitchenette",
      "Balcony",
      "Fitness Equipment",
    ],
    pricePerNight: 135,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
];
