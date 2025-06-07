import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aurora Grand
export const auroraGrandRooms: RoomOption[] = [
  {
    id: "hotel-montreal-4-room-3-SofaBed-CityView",
    name: "Maple Sofa Bed Apartment",
    description: "Indulge in the plush atmosphere of our sofa bed apartment, with spectacular where you can enjoy the city's energy, featuring warm wood and stone accents, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 185,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-montreal-4-room-3-Twin-MountainView",
    name: "Signature Twin Room",
    description: "Signature-themed twin room where the mountains touch the sky, inspired by the rugged beauty of Canadian landscapes and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 226,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-montreal-4-room-3-King-OceanView",
    name: "Premium King Room",
    description: "A gentle king room designed for majestic comfort, with overlooking the sparkling ocean waves and with carefully selected furnishings, reflecting inspired by the rugged beauty of Canadian landscapes.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 340,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-montreal-4-room-3-Single-MountainView",
    name: "Maple Single Suite",
    description: "Unwind in this glamorous single suite where you can enjoy the serenity of mountain life, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 186,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
