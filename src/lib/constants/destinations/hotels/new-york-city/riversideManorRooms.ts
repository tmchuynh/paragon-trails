import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-new-york-city-11-room-10-Twin-CityView",
    name: "Classic Twin Loft",
    description: "Experience our comfy, prestigious twin loft overlooking the vibrant cityscape, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 194,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-new-york-city-11-room-10-Queen-OceanView",
    name: "Horizon Queen Loft",
    description: "Indulge in the eclectic atmosphere of our queen loft, with spectacular where the ocean meets the sky, featuring thoughtful design elements, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 292,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-new-york-city-11-room-10-SofaBed-OceanView",
    name: "Premium Sofa Bed Suite",
    description: "Discover the charm of this Premium-themed sofa bed suite, complete with peaceful ambiance, stunning where the ocean meets the sky, and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 234,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-new-york-city-11-room-10-King-OceanView",
    name: "Tranquility King Suite",
    description: "A exquisite king retreat where the horizon meets the ocean, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 346,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
