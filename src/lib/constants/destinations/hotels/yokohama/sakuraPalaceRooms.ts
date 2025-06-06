import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sakura Palace
export const sakuraPalaceRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-2-room-1",
    name: "Imperial Queen Apartment",
    description: "Relax in our wide-ranging roomy queen apartment featuring where you can enjoy stunning sunsets over the water, along with featuring premium bath amenities and featuring traditional tatami elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Balcony", "Sauna", "Complimentary Bottled Water", "Bathtub"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 159,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-yokohama-2-room-1",
    name: "Fuji King Apartment",
    description: "Enjoy a roomy stay in our Fuji-themed king apartment, offering with a pleasant outlook, with high-speed internet access, and unique touches of offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Kitchenette", "Accessible Room", "Bluetooth Speaker", "Flat-Screen TV"],
    pricePerNight: 127,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
