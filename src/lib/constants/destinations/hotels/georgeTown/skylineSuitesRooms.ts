import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-george-town-4-room-3",
    name: "Classic Single Apartment",
    description: "This regal single apartment promises with a view of the garden's seasonal changes, enriched by Classic-themed details and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Family Room", "Fireplace"],
    pricePerNight: 179,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-george-town-4-room-3",
    name: "Horizon Twin Suite",
    description: "This snug twin suite promises with a view of the city's cultural landmarks, enriched by Horizon-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Seating Area", "Sauna"],
    pricePerNight: 207,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-george-town-4-room-3",
    name: "Deluxe Double Penthouse",
    description: "Discover the charm of this Deluxe-themed double penthouse, complete with open-concept ambiance, stunning with a pleasant outlook, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Family Room", "Blackout Curtains", "Sauna"],
    pricePerNight: 188,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
