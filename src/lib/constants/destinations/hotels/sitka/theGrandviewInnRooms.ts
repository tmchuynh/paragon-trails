import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Grandview Inn
export const theGrandviewInnRooms: RoomOption[] = [
  {
    id: "hotel-sitka-2-room-1",
    name: "Pioneer Sofa Bed Suite",
    description: "Unwind in this regal sofa bed suite with a view of the mountains' lush valleys, with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Board Games", "Blackout Curtains", "Books", "Dining Table", "Accessible Room"],
    pricePerNight: 92,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-sitka-2-room-1",
    name: "Heritage Double Villa",
    description: "A restful double villa designed for commodious comfort, with offering panoramic city vistas and with high-speed internet access, reflecting highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Fireplace", "Bathtub"],
    pricePerNight: 82,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
