import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-tampa-5-room-4",
    name: "Superior King Penthouse",
    description:
      "Our Superior-themed king penthouse offers restful luxury, panoramic where you can experience the beauty of nature, and with plush bedding for ultimate comfort, inspired by featuring sleek urban design elements.",
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
      "Soundproofing",
      "Outdoor Furniture",
      "Mini Bar",
      "Connecting Rooms",
      "Streaming Services",
    ],
    pricePerNight: 531,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
];
