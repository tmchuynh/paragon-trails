import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-melbourne-5-room-4",
    name: "Koala King Loft",
    description: "Relax in our calming tasteful king loft featuring where you can find inspiration in the mountains, along with complete with a well-appointed bathroom and with coastal and Outback influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Connecting Rooms", "Refrigerator", "Flat-Screen TV", "Dining Table"],
    pricePerNight: 172,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-melbourne-5-room-4",
    name: "Sunburnt King Suite",
    description: "Sunburnt-themed suite with refreshing decor, with a view of the city's cultural landmarks, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Flat-Screen TV", "Board Games", "Fireplace", "Pet Friendly"],
    pricePerNight: 161,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
