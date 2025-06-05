import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-santorini-4-room-3",
    name: "Horizon King Loft",
    description: "Our Horizon-themed king loft offers tasteful luxury, panoramic with a private balcony overlooking the sea, and with blackout curtains for a perfect night's sleep, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Family Room", "Seating Area", "Books", "Mini Bar", "Soundproofing"],
    pricePerNight: 620,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
