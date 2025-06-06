import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-kiel-6-room-5",
    name: "Horizon Single Studio",
    description:
      "Indulge in the tranquil atmosphere of our single studio, with spectacular surrounded by vibrant flora, designed for ultimate comfort, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
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
      "In-Room Safe",
      "Ironing Facilities",
      "Bathtub",
      "Smoke Detector",
      "Wake-Up Service",
    ],
    pricePerNight: 185,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
];
