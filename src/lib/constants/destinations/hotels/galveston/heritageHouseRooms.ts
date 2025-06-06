import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-galveston-5-room-4",
    name: "Colonial King Studio",
    description: "Colonial-themed studio with heartwarming decor, with a view of the city's cultural landmarks, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Ironing Facilities", "Outdoor Furniture", "Flat-Screen TV", "Luggage Rack", "Fireplace"],
    pricePerNight: 285,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-galveston-5-room-4",
    name: "Executive King Penthouse",
    description: "A lavish king retreat with a view of manicured lawns and gardens, with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Refrigerator", "Connecting Rooms", "Books", "Wake-Up Service"],
    pricePerNight: 330,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
