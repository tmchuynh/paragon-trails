import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-montevideo-4-room-3",
    name: "Gaucho Single Penthouse",
    description: "Relax in our intimate soothing single penthouse featuring with a view of the tranquil sea, along with with a spacious seating area and blending colonial charm with modern simplicity.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Pet Friendly", "Bathtub", "Family Room", "Refrigerator", "Connecting Rooms"],
    pricePerNight: 192,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-montevideo-4-room-3",
    name: "Colonia Double Villa",
    description: "This spacious double villa promises with breathtaking sea views, enriched by Colonia-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Bathtub", "Bluetooth Speaker"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 244,
    currency: "UYU",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-montevideo-4-room-3",
    name: "Charrúa Double Villa",
    description: "This homey double accommodation offers overlooking lush garden landscapes, highlighting relaxed South American style.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Bluetooth Speaker", "Jacuzzi Tub", "Complimentary Bottled Water", "Streaming Services", "Books"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 223,
    currency: "UYU",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
