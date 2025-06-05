import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-4-room-3",
    name: "Lagoon King Room",
    description:
      "Relax in our traditional grandiose king room featuring with a view of the mountains' lush valleys, along with offering a unique blend of style and comfort and offering a vibrant island-inspired experience.",
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
      "Kitchenette",
      "Jacuzzi Tub",
      "Complimentary Bottled Water",
      "Bathtub",
      "Streaming Services",
    ],
    pricePerNight: 408,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
];
