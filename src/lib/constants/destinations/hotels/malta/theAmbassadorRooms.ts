import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-malta-1-room-0",
    name: "Luxury Single Apartment",
    description: "Experience our fashionable, elegant single apartment with a view of the endless blue, with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Blackout Curtains", "Pet Friendly", "Family Room"],
    pricePerNight: 122,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
