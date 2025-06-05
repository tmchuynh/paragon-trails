import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-5-room-4",
    name: "Tranquility King Suite",
    description: "Our Tranquility-themed king suite offers minimalist luxury, panoramic with a view of shaded garden paths, and with a spacious seating area, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Flat-Screen TV", "Wake-Up Service", "Bluetooth Speaker", "In-Room Safe", "Connecting Rooms"],
    pricePerNight: 163,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-rio-de-janeiro-5-room-4",
    name: "Classic King Loft",
    description: "Experience our cozy, tasteful king loft with a private balcony overlooking the sea, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Dining Table", "Blackout Curtains", "Flat-Screen TV"],
    pricePerNight: 170,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
