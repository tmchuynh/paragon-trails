import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-3-room-2",
    name: "Signature Sofa Bed Villa",
    description: "This industrial sofa bed villa promises overlooking the vibrant cityscape, enriched by Signature-themed details and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Smoke Detector", "Dining Table"],
    pricePerNight: 203,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-dubrovnik-3-room-2",
    name: "Serenity King Apartment",
    description: "A commodious king apartment designed for artistic comfort, with with a pleasant outlook and including climate control for your comfort, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Seating Area", "Luggage Rack", "Complimentary Bottled Water", "Accessible Room", "Refrigerator"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 304,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
