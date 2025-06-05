import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oakwood Resort
export const oakwoodResortRooms: RoomOption[] = [
  {
    id: "hotel-charleston-4-room-3",
    name: "Heritage King Room",
    description: "Unwind in this elegant king room offering panoramic city vistas, with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Fitness Equipment", "Blackout Curtains"],
    pricePerNight: 262,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
