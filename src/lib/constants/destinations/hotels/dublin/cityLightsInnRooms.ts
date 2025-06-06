import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-dublin-4-room-3",
    name: "Serenity Double Penthouse",
    description:
      "Step into a sumptuous double penthouse that combines Serenity-themed with breathtaking with a view of manicured lawns and gardens, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
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
      "Books",
      "Mini Bar",
      "Ironing Facilities",
      "Sauna",
      "Luggage Rack",
      "Streaming Services",
    ],
    pricePerNight: 221,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
];
