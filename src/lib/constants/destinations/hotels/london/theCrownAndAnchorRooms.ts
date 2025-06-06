import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Crown and Anchor
export const theCrownAndAnchorRooms: RoomOption[] = [
  {
    id: "hotel-london-6-room-5",
    name: "Luxury Double Villa",
    description:
      "Enjoy a vast stay in our Luxury-themed double villa, offering where you can enjoy the city's energy, with blackout curtains for a perfect night's sleep, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
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
      "Soundproofing",
      "Dining Table",
      "Accessible Room",
      "Bathtub",
    ],
    pricePerNight: 106,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
];
