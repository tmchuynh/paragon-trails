import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-bali-6-room-5",
    name: "Java Double Apartment",
    description: "Discover the charm of this Java-themed double apartment, complete with modern ambiance, stunning with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Dining Table", "Soundproofing", "Fireplace", "Balcony", "Family Room"],
    pricePerNight: 85,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-bali-6-room-5",
    name: "Deluxe Queen Loft",
    description: "Relax in our wide-ranging industrial queen loft featuring where you can relax to the sound of the waves, along with with blackout curtains for a perfect night's sleep and decorated with handcrafted local motifs.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Sauna", "Accessible Room", "Fitness Equipment", "In-Room Safe"],
    pricePerNight: 114,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-bali-6-room-5",
    name: "Bali Queen Room",
    description: "Bali-themed queen room with a pleasant outlook, highlighting island-inspired tranquility and with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Seating Area", "Luggage Rack", "Sauna", "Smoke Detector"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 91,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
