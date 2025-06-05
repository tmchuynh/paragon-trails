import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Liberty Suites
export const libertySuitesRooms: RoomOption[] = [
  {
    id: "hotel-boston-3-room-2",
    name: "Pioneer Queen Suite",
    description: "Pioneer-themed queen suite with a pleasant outlook, with rustic and modern influences and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Dining Table", "Sauna", "Fireplace"],
    pricePerNight: 229,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-boston-3-room-2",
    name: "Colonial Twin Villa",
    description: "Relax in our upscale ample twin villa featuring where you can enjoy the serenity of a garden retreat, along with complete with a well-appointed bathroom and offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Pet Friendly", "Books", "Soundproofing", "Blackout Curtains"],
    pricePerNight: 213,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
