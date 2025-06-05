import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Tranquility King Apartment",
    description: "This exquisite king apartment promises where you can enjoy the city's energy, enriched by Tranquility-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Seating Area", "Family Room", "Pet Friendly", "Balcony"],
    pricePerNight: 134,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Luxury King Apartment",
    description: "Luxury-themed apartment with sophisticated decor, with a pleasant outlook, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Refrigerator", "Mini Bar", "Kitchenette"],
    pricePerNight: 107,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
