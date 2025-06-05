import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-george-town-6-room-5",
    name: "Classic King Villa",
    description: "Our compact Classic-themed villa offers with a view of the garden's peaceful ambiance, grandiose comfort, and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Ironing Facilities", "Dining Table", "Blackout Curtains"],
    pricePerNight: 202,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
