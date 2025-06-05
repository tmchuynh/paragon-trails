import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-sitka-1-room-0",
    name: "Liberty Single Apartment",
    description: "Indulge in the elegant atmosphere of our single apartment, with spectacular with a pleasant outlook, with rustic and modern influences, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Refrigerator", "Family Room", "Blackout Curtains"],
    pricePerNight: 73,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-sitka-1-room-0",
    name: "Pioneer Sofa Bed Loft",
    description: "Discover the charm of this Pioneer-themed sofa bed loft, complete with spacious ambiance, stunning with a view of the city's cultural landmarks, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Wake-Up Service", "Luggage Rack", "Balcony"],
    pricePerNight: 105,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
