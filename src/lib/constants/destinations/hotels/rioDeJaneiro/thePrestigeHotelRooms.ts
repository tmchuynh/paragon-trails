import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-3-room-2",
    name: "Harmony King Suite",
    description: "Our Harmony-themed king suite offers futuristic luxury, panoramic with a pleasant outlook, and offering a unique blend of style and comfort, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Accessible Room", "Sauna", "Connecting Rooms", "In-Room Safe", "Pet Friendly"],
    pricePerNight: 254,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-rio-de-janeiro-3-room-2",
    name: "Tranquility King Room",
    description: "Unwind in this artistic king room with a view of iconic landmarks, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Kitchenette", "Ironing Facilities"],
    pricePerNight: 309,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
