import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-nassau-4-room-3",
    name: "Paradise Queen Room",
    description: "Our Paradise-themed queen room offers snug luxury, panoramic where you can watch the city wake up, and with a spacious seating area, inspired by with bright tropical colors and seaside charm.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Family Room", "Mini Bar", "Kitchenette"],
    pricePerNight: 131,
    currency: "BSD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-nassau-4-room-3",
    name: "Premium Double Villa",
    description: "This contemporary double accommodation offers overlooking the vibrant cityscape, offering a relaxed yet stylish atmosphere.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Refrigerator", "Books", "Complimentary Bottled Water"],
    pricePerNight: 100,
    currency: "BSD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
