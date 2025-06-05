import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-7-room-6",
    name: "Classic King Loft",
    description:
      "Indulge in the soft atmosphere of our king loft, with spectacular where you can enjoy the garden's peaceful atmosphere, featuring airy, sun-drenched interiors, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
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
      "Sauna",
      "Connecting Rooms",
      "Jacuzzi Tub",
      "Blackout Curtains",
      "Accessible Room",
      "Luggage Rack",
    ],
    pricePerNight: 156,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
];
