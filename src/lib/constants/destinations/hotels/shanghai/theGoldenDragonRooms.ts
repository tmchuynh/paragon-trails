import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Golden Dragon
export const theGoldenDragonRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-5-room-4",
    name: "Silk Single Villa",
    description: "Relax in our deluxe retro single villa featuring where you can watch the city wake up, along with with a private balcony or terrace and with classic Chinese artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Soundproofing", "Wake-Up Service", "Connecting Rooms"],
    pricePerNight: 137,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-shanghai-5-room-4",
    name: "Bamboo Double Loft",
    description: "Bamboo-themed loft with extravagant decor, with a view of iconic landmarks, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Family Room", "Wake-Up Service", "Refrigerator"],
    pricePerNight: 175,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
