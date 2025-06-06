import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-lisbon-3-room-2",
    name: "Signature Single Penthouse",
    description: "Discover the charm of this Signature-themed single penthouse, complete with sumptuous ambiance, stunning where you can escape to the mountains, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Board Games", "Balcony"],
    pricePerNight: 168,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-lisbon-3-room-2",
    name: "Serenity Single Suite",
    description: "Relax in our bohemian glamorous single suite featuring featuring a peaceful garden setting, along with with a private balcony or terrace and featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Books", "Balcony"],
    pricePerNight: 135,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-lisbon-3-room-2",
    name: "Signature Double Suite",
    description: "Relax in our vintage sleek double suite featuring with a front-row seat to the city's heartbeat, along with including climate control for your comfort and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Bluetooth Speaker", "Wake-Up Service", "Board Games", "Kitchenette", "In-Room Safe"],
    pricePerNight: 161,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-lisbon-3-room-2",
    name: "Modern Queen Studio",
    description: "This homey queen accommodation offers where you can relax to the sound of the waves, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Ironing Facilities", "In-Room Safe", "Dining Table", "Pet Friendly"],
    pricePerNight: 262,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
