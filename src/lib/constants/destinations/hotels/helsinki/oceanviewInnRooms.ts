import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-helsinki-3-room-2",
    name: "Classic Queen Room",
    description: "Classic-themed queen room with a view of the city's cultural landmarks, decorated with local artistic influences and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Bathtub", "Board Games", "Luggage Rack", "Mini Bar", "Blackout Curtains"],
    pricePerNight: 141,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
