import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-fort-lauderdale-4-room-3",
    name: "Modern King Apartment",
    description: "Unwind in this contemporary king apartment with a pleasant outlook, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Soundproofing", "Pet Friendly", "Refrigerator", "Wake-Up Service"],
    pricePerNight: 368,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-fort-lauderdale-4-room-3",
    name: "Luxury King Penthouse",
    description: "Indulge in the sumptuous atmosphere of our king penthouse, with spectacular with a view of snow-capped peaks, decorated with local artistic influences, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Sauna", "Mini Bar", "Complimentary Bottled Water"],
    pricePerNight: 421,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
