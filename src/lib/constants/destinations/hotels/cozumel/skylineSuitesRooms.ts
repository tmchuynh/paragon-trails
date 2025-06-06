import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-5-room-4",
    name: "Sunstone Single Suite",
    description: "This industrial single accommodation offers with a pleasant outlook, blending traditional Mexican motifs with modern style.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Ironing Facilities", "In-Room Safe", "Blackout Curtains"],
    pricePerNight: 177,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-cozumel-5-room-4",
    name: "Aztec Queen Room",
    description: "Our traditional Aztec-themed room offers with a window to the bustling city below, tranquil comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Bathtub", "Sauna", "In-Room Safe"],
    pricePerNight: 310,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-cozumel-5-room-4",
    name: "Standard Sofa Bed Penthouse",
    description: "This regal sofa bed penthouse promises showcasing the urban landscape, enriched by Standard-themed details and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Seating Area", "Dining Table", "Pet Friendly", "Jacuzzi Tub"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 227,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
