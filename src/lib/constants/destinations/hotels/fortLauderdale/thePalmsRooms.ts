import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Palms
export const thePalmsRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-1-room-0",
    name: "Classic Twin Loft",
    description: "A tasteful twin retreat overlooking lush garden landscapes, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Accessible Room", "Bluetooth Speaker", "Luggage Rack"],
    pricePerNight: 122,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-fort-lauderdale-1-room-0",
    name: "Modern King Loft",
    description: "A grandiose king loft designed for intimate comfort, with with a view of the ocean's changing tides and offering a unique blend of style and comfort, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Sauna", "Seating Area"],
    pricePerNight: 198,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-fort-lauderdale-1-room-0",
    name: "Harmony King Penthouse",
    description: "Indulge in the rustic atmosphere of our king penthouse, with spectacular showcasing the urban landscape, created with both style and function in mind, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Seating Area", "Fireplace", "Balcony", "Family Room", "In-Room Safe"],
    pricePerNight: 189,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
