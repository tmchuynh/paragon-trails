import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-5-room-4",
    name: "Harmony King Apartment",
    description:
      "Unwind in this peaceful king apartment where city lights twinkle at night, with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 2,
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
      "Mini Bar",
      "Bathtub",
      "Luggage Rack",
      "Family Room",
    ],
    pricePerNight: 281,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
];
