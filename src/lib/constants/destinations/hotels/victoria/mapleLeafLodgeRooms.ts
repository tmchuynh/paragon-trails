import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Maple Leaf Lodge
export const mapleLeafLodgeRooms: RoomOption[] = [
  {
    id: "hotel-victoria-6-room-5",
    name: "Maple Single Suite",
    description: "Our cozy Maple-themed suite offers where the ocean meets the sky, intimate comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Jacuzzi Tub", "Bathtub"],
    pricePerNight: 176,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
