import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-oslo-1-room-0",
    name: "Luxury Sofa Bed Suite",
    description: "A deluxe sofa bed suite designed for sizable comfort, with with a pleasant outlook and with carefully selected furnishings, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Connecting Rooms", "Balcony", "In-Room Safe"],
    pricePerNight: 183,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-oslo-1-room-0",
    name: "Deluxe Sofa Bed Apartment",
    description: "Experience our minimalist, industrial sofa bed apartment with a front-row seat to the city's heartbeat, with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Sauna", "Refrigerator", "Ironing Facilities"],
    pricePerNight: 210,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-oslo-1-room-0",
    name: "Serenity King Room",
    description: "Experience our welcoming, airy king room with a pleasant outlook, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Refrigerator", "Complimentary Bottled Water"],
    pricePerNight: 294,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
