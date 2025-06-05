import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-2-room-1",
    name: "Superior Queen Penthouse",
    description: "This modern queen accommodation offers where you can take in the fresh air, featuring handcrafted local motifs.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "In-Room Safe", "Luggage Rack", "Sauna", "Outdoor Furniture", "Soundproofing"],
    pricePerNight: 252,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
