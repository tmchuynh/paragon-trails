import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-singapore-2-room-1",
    name: "Orchard Queen Villa",
    description: "Indulge in the sumptuous atmosphere of our queen villa, with spectacular offering panoramic city vistas, highlighting innovative and sustainable design, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Ironing Facilities", "Flat-Screen TV", "Pet Friendly", "Fitness Equipment"],
    pricePerNight: 117,
    currency: "SGD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
