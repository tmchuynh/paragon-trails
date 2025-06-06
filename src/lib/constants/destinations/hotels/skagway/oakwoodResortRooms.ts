import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-skagway-3-room-2",
    name: "Premium Double Loft",
    description:
      "Indulge in the grandiose atmosphere of our double loft, with spectacular showcasing the urban landscape, featuring sleek urban design elements, and with high-speed internet access.",
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
      "Luggage Rack",
      "Ironing Facilities",
      "Fireplace",
      "Family Room",
      "Accessible Room",
    ],
    pricePerNight: 201,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
];
