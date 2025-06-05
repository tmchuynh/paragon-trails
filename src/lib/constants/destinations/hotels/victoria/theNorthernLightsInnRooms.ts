import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Northern Lights Inn
export const theNorthernLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-victoria-5-room-4",
    name: "Executive Sofa Bed Penthouse",
    description: "Indulge in the regal atmosphere of our sofa bed penthouse, with spectacular where you can watch the city wake up, featuring warm wood and stone accents, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Pet Friendly", "Bluetooth Speaker", "Board Games", "Mini Bar", "Seating Area"],
    pricePerNight: 112,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-victoria-5-room-4",
    name: "Northern Lights Double Penthouse",
    description: "Enjoy a inviting stay in our Northern Lights-themed double penthouse, offering where you can hear the soothing sound of the sea, with a modern en-suite bathroom, and unique touches of featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Board Games", "Seating Area", "Luggage Rack"],
    pricePerNight: 166,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-victoria-5-room-4",
    name: "Maple Queen Room",
    description: "Maple-themed queen room where the city skyline meets the horizon, blending urban sophistication with wilderness charm and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Outdoor Furniture", "In-Room Safe"],
    pricePerNight: 162,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
