import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Ambassador
export const theAmbassadorRooms: RoomOption[] = [
  {
    id: "hotel-lima-1-room-0",
    name: "Inca King Villa",
    description: "Inca-themed villa with elegant decor, where you can enjoy the tranquility of the mountains, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Refrigerator", "Complimentary Bottled Water", "Ironing Facilities", "Balcony", "In-Room Safe"],
    pricePerNight: 174,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-lima-1-room-0",
    name: "Superior King Apartment",
    description: "A room-filled king apartment designed for large-scale comfort, with with a view of iconic landmarks and offering a unique blend of style and comfort, reflecting featuring Andean-inspired patterns and textures.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "In-Room Safe", "Bluetooth Speaker", "Ironing Facilities", "Books"],
    pricePerNight: 147,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
