import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-santorini-2-room-1",
    name: "Modern King Studio",
    description: "A heartwarming king retreat with stunning views of the city skyline, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Jacuzzi Tub", "Wake-Up Service", "Pet Friendly", "Connecting Rooms"],
    pricePerNight: 319,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-santorini-2-room-1",
    name: "Tranquility Double Villa",
    description: "This ornate double accommodation offers with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Board Games", "In-Room Safe", "Seating Area", "Bathtub"],
    pricePerNight: 208,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
