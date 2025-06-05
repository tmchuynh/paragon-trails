import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-malta-3-room-2",
    name: "Premium King Loft",
    description: "Discover the charm of this Premium-themed king loft, complete with industrial ambiance, stunning with a front-row seat to the city's heartbeat, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "In-Room Safe", "Bluetooth Speaker"],
    pricePerNight: 150,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-malta-3-room-2",
    name: "Tranquility King Apartment",
    description: "Our sizable Tranquility-themed apartment offers where you can watch the waves roll in, palatial comfort, and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Dining Table", "Luggage Rack", "Kitchenette", "Mini Bar", "Fireplace"],
    pricePerNight: 191,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
