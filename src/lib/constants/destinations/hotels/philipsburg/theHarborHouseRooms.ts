import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Lagoon Queen Loft",
    description: "Lagoon-themed queen loft where you can enjoy the serenity of mountain life, with tropical and nautical themes and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "In-Room Safe", "Seating Area", "Accessible Room"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 143,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Classic Twin Studio",
    description: "Relax in our room-filled roomy twin studio featuring with a view of the city's waterfront, along with with a private balcony or terrace and with tropical and nautical themes.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Outdoor Furniture", "Connecting Rooms", "Pet Friendly"],
    pricePerNight: 89,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-philipsburg-3-room-2",
    name: "Tropical Sky King Suite",
    description: "Tropical Sky-themed king suite with a view of the garden's lush greenery, with tropical and nautical themes and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Dining Table", "In-Room Safe", "Family Room", "Board Games", "Bathtub"],
    pricePerNight: 172,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
