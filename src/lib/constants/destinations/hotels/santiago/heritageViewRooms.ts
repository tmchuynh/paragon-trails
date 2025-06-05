import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-santiago-6-room-5",
    name: "Atacama Queen Loft",
    description: "Atacama-themed queen loft showcasing the urban landscape, offering serene and refined interiors and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Mini Bar", "Soundproofing", "Streaming Services"],
    pricePerNight: 250,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-santiago-6-room-5",
    name: "Atacama Sofa Bed Room",
    description: "This comfy sofa bed accommodation offers with a view of the garden's tranquil pathways, blending Andean and coastal influences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Streaming Services", "Balcony", "Accessible Room", "Sauna"],
    pricePerNight: 215,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
