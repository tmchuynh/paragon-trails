import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Eagle Crest Hotel
export const eagleCrestHotelRooms: RoomOption[] = [
  {
    id: "hotel-miami-5-room-4",
    name: "Superior King Loft",
    description: "This refreshing king loft promises with a view of the city's cultural landmarks, enriched by Superior-themed details and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Family Room", "Soundproofing", "Balcony", "Sauna"],
    pricePerNight: 254,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-miami-5-room-4",
    name: "Colonial King Loft",
    description: "Discover the charm of this Colonial-themed king loft, complete with wide-ranging ambiance, stunning where the horizon meets the ocean, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Ironing Facilities", "Fitness Equipment"],
    pricePerNight: 315,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
