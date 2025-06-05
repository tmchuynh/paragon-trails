import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-george-town-3-room-2",
    name: "Deluxe King Apartment",
    description: "Experience our artistic, lavish king apartment with a view of the rugged mountain landscape, with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Smoke Detector", "In-Room Safe"],
    pricePerNight: 398,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-george-town-3-room-2",
    name: "Deluxe King Apartment",
    description: "Our Deluxe-themed king apartment offers sizable luxury, panoramic where you can escape to a green sanctuary, and with carefully selected furnishings, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Balcony", "Soundproofing", "Refrigerator", "Connecting Rooms", "Blackout Curtains"],
    pricePerNight: 420,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
