import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-dublin-3-room-2",
    name: "Modern Single Villa",
    description: "Our relaxing Modern-themed villa offers with breathtaking sea views, airy comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Ironing Facilities", "Board Games", "In-Room Safe", "Streaming Services"],
    pricePerNight: 190,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-dublin-3-room-2",
    name: "Harmony Single Villa",
    description: "Indulge in the generous atmosphere of our single villa, with spectacular with a window to the bustling city below, designed for ultimate comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Wake-Up Service", "Books", "Mini Bar", "Accessible Room"],
    pricePerNight: 166,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
