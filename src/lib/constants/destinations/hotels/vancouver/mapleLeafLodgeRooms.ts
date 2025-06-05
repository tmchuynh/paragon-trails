import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Maple Leaf Lodge
export const mapleLeafLodgeRooms: RoomOption[] = [
  {
    id: "hotel-vancouver-6-room-5",
    name: "Northern Lights King Loft",
    description: "Northern Lights-themed king loft featuring a blend of modern and historic architecture, inspired by the rugged beauty of Canadian landscapes and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Ironing Facilities", "Dining Table"],
    pricePerNight: 290,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-vancouver-6-room-5",
    name: "Northern Lights King Villa",
    description: "This grandiose king villa promises with a view of the ocean's changing tides, enriched by Northern Lights-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Sauna", "Bluetooth Speaker"],
    pricePerNight: 344,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
