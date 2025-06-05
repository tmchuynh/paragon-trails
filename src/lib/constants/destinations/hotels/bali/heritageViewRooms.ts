import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-bali-5-room-4",
    name: "Signature King Penthouse",
    description: "A extravagant king retreat where you can feel the ocean breeze, highlighting island-inspired tranquility.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Pet Friendly", "Family Room", "Bluetooth Speaker"],
    pricePerNight: 385,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-bali-5-room-4",
    name: "Java Queen Room",
    description: "Indulge in the palatial atmosphere of our queen room, with spectacular with a view of colorful flower beds, highlighting island-inspired tranquility, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Ironing Facilities", "Complimentary Bottled Water", "Dining Table"],
    pricePerNight: 251,
    currency: "IDR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
