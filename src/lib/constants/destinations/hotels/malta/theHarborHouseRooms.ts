import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-malta-2-room-1",
    name: "Harmony Single Loft",
    description: "Experience our room-filled, extensive single loft where you can enjoy the peace of the highlands, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Blackout Curtains", "Streaming Services", "Outdoor Furniture", "Accessible Room"],
    pricePerNight: 213,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-malta-2-room-1",
    name: "Tranquility Single Penthouse",
    description: "Indulge in the deluxe atmosphere of our single penthouse, with spectacular where you can relax in a garden haven, decorated with local artistic influences, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Dining Table", "Seating Area"],
    pricePerNight: 177,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-malta-2-room-1",
    name: "Premium Double Penthouse",
    description: "Enjoy a stretching stay in our Premium-themed double penthouse, offering with a view of blooming flowers and greenery, with carefully selected furnishings, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Streaming Services", "Balcony", "Dining Table", "Bluetooth Speaker"],
    pricePerNight: 231,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
