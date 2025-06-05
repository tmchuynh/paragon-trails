import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-dubai-2-room-1",
    name: "Desert Sofa Bed Villa",
    description: "Discover the charm of this Desert-themed sofa bed villa, complete with roomy ambiance, stunning with serene garden views, and with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Luggage Rack", "Fireplace", "Complimentary Bottled Water", "Bluetooth Speaker"],
    pricePerNight: 247,
    currency: "AED",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
