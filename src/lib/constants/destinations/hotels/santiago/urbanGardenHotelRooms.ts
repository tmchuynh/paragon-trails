import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-santiago-1-room-0",
    name: "Executive King Suite",
    description: "Our Executive-themed king suite offers futuristic luxury, panoramic with a view of the garden's lush greenery, and offering a unique blend of style and comfort, inspired by offering serene and refined interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Wake-Up Service", "Complimentary Bottled Water"],
    pricePerNight: 180,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
