import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-3-room-2",
    name: "Tranquility King Studio",
    description: "This broad king accommodation offers with a view of iconic landmarks, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Seating Area", "Mini Bar", "Connecting Rooms", "Sauna", "Bluetooth Speaker"],
    pricePerNight: 297,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-ho-chi-minh-city-3-room-2",
    name: "Premium King Villa",
    description: "Discover the charm of this Premium-themed king villa, complete with minimalist ambiance, stunning with a pleasant outlook, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Refrigerator", "Outdoor Furniture", "Dining Table"],
    pricePerNight: 307,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
