import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-lima-2-room-1",
    name: "Inca Twin Suite",
    description:
      "Indulge in the vast atmosphere of our twin suite, with spectacular with a view of the garden's natural beauty, blending rich cultural heritage with comfort, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
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
      "Bluetooth Speaker",
      "Soundproofing",
      "Fitness Equipment",
      "Seating Area",
    ],
    pricePerNight: 135,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
];
