import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-4-room-3",
    name: "Seashell Sofa Bed Room",
    description: "A restful sofa bed retreat where you can watch the city wake up, featuring bright, cheerful decor.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Connecting Rooms", "Bathtub", "Seating Area", "Wake-Up Service", "Ironing Facilities"],
    pricePerNight: 113,
    currency: "ANG",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
