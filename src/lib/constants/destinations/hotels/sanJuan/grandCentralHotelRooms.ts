import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-4-room-3",
    name: "Serenity Twin Penthouse",
    description: "This rustic twin accommodation offers with a window to the bustling city below, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Board Games", "Complimentary Bottled Water", "Streaming Services", "Balcony", "Smoke Detector"],
    pricePerNight: 75,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
