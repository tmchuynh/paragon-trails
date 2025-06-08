import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Plitvice Lakes Lodge
export const plitviceLakesLodgeRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-5-room-4-Double-CityView",
    name: "Dalmatia Double Suite",
    description: "Discover the charm of this Dalmatia-themed double suite, complete with palatial ambiance, stunning with a front-row seat to the city's heartbeat, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 71,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-dubrovnik-5-room-4-Double-None",
    name: "Luxury Double Room",
    description: "Discover the charm of this Luxury-themed double room, complete with large-scale ambiance, stunning with a pleasant outlook, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 74,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-dubrovnik-5-room-4-King-GardenView",
    name: "Hvar King Penthouse",
    description: "This sophisticated king penthouse promises offering a peaceful garden outlook, enriched by Hvar-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 110,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-dubrovnik-5-room-4-Queen-None",
    name: "Signature Queen Apartment",
    description: "Our Signature-themed queen apartment offers chic luxury, panoramic with a pleasant outlook, and featuring a curated minibar selection, inspired by featuring coastal-inspired decor with Mediterranean influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
