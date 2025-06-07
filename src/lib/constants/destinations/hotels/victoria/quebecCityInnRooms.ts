import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Quebec City Inn
export const quebecCityInnRooms: RoomOption[] = [
  {
    id: "hotel-victoria-6-room-5-King-GardenView",
    name: "Aurora King Loft",
    description: "Relax in our sophisticated expansive king loft featuring where you can enjoy the garden's peaceful atmosphere, along with complete with a well-appointed bathroom and with cozy, nature-inspired themes.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 556,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-victoria-6-room-5-SofaBed-None",
    name: "Superior Sofa Bed Loft",
    description: "Superior-themed sofa bed loft with a pleasant outlook, blending urban sophistication with wilderness charm and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 321,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-victoria-6-room-5-King-CityView",
    name: "Maple King Studio",
    description: "Unwind in this elegant king studio where city lights twinkle at night, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Bathroom"],
    pricePerNight: 520,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-victoria-6-room-5-Twin-OceanView",
    name: "Deluxe Twin Room",
    description: "A soft twin retreat with breathtaking sea views, featuring warm wood and stone accents.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 409,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
