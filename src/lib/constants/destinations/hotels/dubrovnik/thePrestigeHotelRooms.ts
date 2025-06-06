import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-4-room-3",
    name: "Serenity Single Studio",
    description:
      "Indulge in the soothing atmosphere of our single studio, with spectacular with a view of the mountains' rugged terrain, designed for ultimate comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
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
      "Pet Friendly",
      "Jacuzzi Tub",
      "Refrigerator",
    ],
    pricePerNight: 118,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
];
