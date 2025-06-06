import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Zen Garden Inn
export const theZenGardenInnRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-2-room-1",
    name: "Zen King Suite",
    description: "Indulge in the rustic atmosphere of our king suite, with spectacular with a pleasant outlook, featuring traditional tatami elements, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Books", "Ironing Facilities"],
    pricePerNight: 277,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-kyoto-2-room-1",
    name: "Harmony Single Villa",
    description: "Our opulent Harmony-themed villa offers where you can enjoy the mountains' majestic presence, inviting comfort, and with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Soundproofing", "Family Room"],
    pricePerNight: 216,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
