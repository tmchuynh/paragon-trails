import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sakura Palace
export const sakuraPalaceRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-2-room-1",
    name: "Zen King Loft",
    description: "Enjoy a comfortable stay in our Zen-themed king loft, offering with a pleasant outlook, with a modern en-suite bathroom, and unique touches of offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Luggage Rack", "Books", "Seating Area"],
    pricePerNight: 145,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-yokohama-2-room-1",
    name: "Standard Single Studio",
    description: "Our broad Standard-themed studio offers with a pleasant outlook, intimate comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Bathtub", "Fitness Equipment", "Sauna", "Wake-Up Service", "In-Room Safe"],
    pricePerNight: 73,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-yokohama-2-room-1",
    name: "Harmony Single Villa",
    description: "Enjoy a elegant stay in our Harmony-themed single villa, offering where you can enjoy the serenity of mountain life, with a spacious seating area, and unique touches of featuring traditional tatami elements.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Seating Area", "Outdoor Furniture", "Balcony"],
    pricePerNight: 99,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-yokohama-2-room-1",
    name: "Sakura Sofa Bed Penthouse",
    description: "Relax in our intimate refreshing sofa bed penthouse featuring with a pleasant outlook, along with with blackout curtains for a perfect night's sleep and with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Refrigerator", "Complimentary Bottled Water"],
    pricePerNight: 99,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
