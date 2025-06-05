import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Windsor House
export const windsorHouseRooms: RoomOption[] = [
  {
    id: "hotel-london-4-room-3",
    name: "Royal King Suite",
    description:
      "Indulge in the opulent atmosphere of our king suite, with spectacular where you can find inspiration in the mountains, featuring thoughtful design elements, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
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
      "Accessible Room",
      "Outdoor Furniture",
    ],
    pricePerNight: 230,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
