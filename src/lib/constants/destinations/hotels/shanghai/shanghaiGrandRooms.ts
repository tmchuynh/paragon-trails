import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Shanghai Grand
export const shanghaiGrandRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-5-room-4",
    name: "Silk King Studio",
    description: "A luxurious king retreat with a pleasant outlook, featuring elegant calligraphy and silk accents.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Seating Area", "Bathtub"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 300,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
