import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-miami-4-room-3",
    name: "Colonial King Penthouse",
    description: "Experience our traditional, opulent king penthouse where the mountains touch the sky, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Accessible Room", "Sauna", "Refrigerator"],
    pricePerNight: 407,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-miami-4-room-3",
    name: "Pioneer Single Studio",
    description: "Unwind in this deluxe single studio with a pleasant outlook, with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Flat-Screen TV", "Board Games"],
    pricePerNight: 180,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-miami-4-room-3",
    name: "Signature Single Villa",
    description: "Experience our heartwarming, minimalist single villa with a view of the mountains' serene beauty, with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Mini Bar", "Dining Table", "Wake-Up Service"],
    pricePerNight: 247,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  }
];
