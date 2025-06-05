import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-3-room-2",
    name: "Classic Single Villa",
    description: "Discover the charm of this Classic-themed single villa, complete with heartwarming ambiance, stunning overlooking the vibrant cityscape, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Books", "Mini Bar", "Board Games", "Luggage Rack", "Seating Area"],
    pricePerNight: 92,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-rio-de-janeiro-3-room-2",
    name: "Horizon Single Penthouse",
    description: "Relax in our palatial grandiose single penthouse featuring with a pleasant outlook, along with featuring premium bath amenities and decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Soundproofing", "Luggage Rack", "Jacuzzi Tub", "Balcony", "Accessible Room"],
    pricePerNight: 78,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
