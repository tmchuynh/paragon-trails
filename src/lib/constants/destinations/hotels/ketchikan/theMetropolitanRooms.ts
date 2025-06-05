import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-1-room-0",
    name: "Liberty King Apartment",
    description:
      "A sleek king apartment designed for bohemian comfort, with where you can escape to the mountains and with a private balcony or terrace, reflecting featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 0,
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
      "Blackout Curtains",
      "Sauna",
      "Family Room",
      "Refrigerator",
      "Fireplace",
    ],
    pricePerNight: 249,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
];
