import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mykonos Blue Suites
export const mykonosBlueSuitesRooms: RoomOption[] = [
  {
    id: "hotel-heraklion-3-room-2-Double-CityView",
    name: "Parthenon Double Suite",
    description: "This airy double accommodation offers with a view of iconic landmarks, featuring Aegean-inspired decor with blue and white tones.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 183,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-heraklion-3-room-2-Single-OceanView",
    name: "Santorini Single Apartment",
    description: "Santorini-themed single apartment with a view of the endless blue, blending traditional style with luxurious amenities and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 186,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-heraklion-3-room-2-SofaBed-None",
    name: "Luxury Sofa Bed Loft",
    description: "Luxury-themed loft with expansive decor, with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 167,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-heraklion-3-room-2-King-OceanView",
    name: "Executive King Loft",
    description: "Enjoy a expansive stay in our Executive-themed king loft, offering featuring uninterrupted ocean vistas, with blackout curtains for a perfect night's sleep, and unique touches of with classic Greek architectural elements and modern comforts.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 312,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
