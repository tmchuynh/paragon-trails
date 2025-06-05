import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-copenhagen-3-room-2",
    name: "Deluxe King Villa",
    description: "Deluxe-themed villa with majestic decor, where the ocean meets the sky, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Smoke Detector", "Jacuzzi Tub", "Balcony", "Outdoor Furniture", "Pet Friendly"],
    pricePerNight: 182,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-copenhagen-3-room-2",
    name: "Executive King Penthouse",
    description: "Experience our intimate, plush king penthouse where you can enjoy the peace of the highlands, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Books", "Seating Area", "Fitness Equipment", "Blackout Curtains"],
    pricePerNight: 178,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
