import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-2-room-1",
    name: "Serenity Single Room",
    description: "This welcoming single room promises with a pleasant outlook, enriched by Serenity-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Dining Table", "Complimentary Bottled Water", "Jacuzzi Tub", "Balcony"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 140,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-helsinki-2-room-1",
    name: "Modern Single Suite",
    description: "Indulge in the intimate atmosphere of our single suite, with spectacular where you can escape to the mountains, created with both style and function in mind, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Board Games", "Refrigerator", "Flat-Screen TV", "Wake-Up Service", "Luggage Rack"],
    pricePerNight: 160,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
