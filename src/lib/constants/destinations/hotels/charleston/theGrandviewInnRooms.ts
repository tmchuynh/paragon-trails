import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-charleston-2-room-1",
    name: "Golden Gate King Room",
    description: "Step into a ample king room that combines Golden Gate-themed with breathtaking featuring awe-inspiring mountain scenery, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Seating Area", "Jacuzzi Tub", "Bluetooth Speaker", "Soundproofing", "Family Room"],
    pricePerNight: 220,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-charleston-2-room-1",
    name: "Heritage King Loft",
    description: "Our Heritage-themed king loft offers minimalist luxury, panoramic with a view of the city's waterfront, and equipped with all the modern conveniences, inspired by with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Smoke Detector", "Fireplace", "Connecting Rooms", "Balcony"],
    pricePerNight: 209,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
