import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-milan-2-room-1",
    name: "Harmony King Studio",
    description: "A roomy king retreat with majestic mountain vistas, featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Smoke Detector", "Complimentary Bottled Water", "Blackout Curtains", "In-Room Safe", "Outdoor Furniture"],
    pricePerNight: 495,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-milan-2-room-1",
    name: "Signature King Loft",
    description: "Signature-themed king loft showcasing the urban landscape, offering a touch of la dolce vita and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Pet Friendly", "In-Room Safe"],
    accessibilityFeatures: ["Visual Aids", "Elevator"],
    pricePerNight: 484,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
