import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-nassau-4-room-3",
    name: "Standard King Loft",
    description: "A comfortable king retreat where you can gaze at the towering peaks, featuring airy, light-filled interiors.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Kitchenette", "Sauna", "Pet Friendly", "Seating Area", "Connecting Rooms"],
    pricePerNight: 311,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-nassau-4-room-3",
    name: "Tropical King Villa",
    description: "Enjoy a avant-garde stay in our Tropical-themed king villa, offering with a pleasant outlook, with high-speed internet access, and unique touches of offering a relaxed yet stylish atmosphere.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Mini Bar", "Board Games", "Soundproofing", "Smoke Detector"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 261,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
