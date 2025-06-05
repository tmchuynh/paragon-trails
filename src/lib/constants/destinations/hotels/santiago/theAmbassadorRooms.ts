import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-santiago-4-room-3",
    name: "Executive King Villa",
    description:
      "Relax in our traditional voluminous king villa featuring with a view of the garden's lush greenery, along with with a private balcony or terrace and highlighting the beauty of Chilean landscapes.",
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
      "Soundproofing",
      "Jacuzzi Tub",
      "Books",
      "Refrigerator",
    ],
    pricePerNight: 410,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
