import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-santorini-1-room-0",
    name: "Harmony King Villa",
    description: "This prestigious king accommodation offers where you can enjoy the serenity of mountain life, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Balcony", "Dining Table", "Pet Friendly", "Accessible Room", "Streaming Services"],
    pricePerNight: 370,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-santorini-1-room-0",
    name: "Tranquility Sofa Bed Loft",
    description: "Our Tranquility-themed sofa bed loft offers eclectic luxury, panoramic with a pleasant outlook, and offering a unique blend of style and comfort, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Fireplace", "Seating Area", "Sauna", "In-Room Safe", "Luggage Rack"],
    pricePerNight: 166,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-santorini-1-room-0",
    name: "Tranquility Sofa Bed Suite",
    description: "Indulge in the regal atmosphere of our sofa bed suite, with spectacular where you can escape to the mountains, featuring thoughtful design elements, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Kitchenette", "Wake-Up Service"],
    pricePerNight: 239,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
