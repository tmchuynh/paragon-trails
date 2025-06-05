import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-athens-1-room-0",
    name: "Serenity King Room",
    description: "Enjoy a gentle stay in our Serenity-themed king room, offering where you can enjoy the city's energy, equipped with all the modern conveniences, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Seating Area", "Ironing Facilities", "Dining Table", "Soundproofing", "Balcony"],
    pricePerNight: 292,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
