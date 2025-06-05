import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-thomas-2-room-1",
    name: "Modern King Loft",
    description: "Experience our roomy, upscale king loft with the sound of the ocean as your backdrop, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Soundproofing", "Jacuzzi Tub", "Outdoor Furniture", "Wake-Up Service"],
    pricePerNight: 392,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
