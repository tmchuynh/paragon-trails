import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-berlin-3-room-2",
    name: "Modern Queen Room",
    description: "Enjoy a futuristic stay in our Modern-themed queen room, offering where the city comes alive at dusk, featuring a curated minibar selection, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Sauna", "Ironing Facilities", "In-Room Safe", "Bathtub", "Wake-Up Service"],
    pricePerNight: 322,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
