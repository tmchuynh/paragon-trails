import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-miami-1-room-0",
    name: "Premium Twin Penthouse",
    description: "Our Premium-themed twin penthouse offers upscale luxury, panoramic where you can enjoy the city's energy, and with a modern en-suite bathroom, inspired by offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "In-Room Safe", "Complimentary Bottled Water", "Blackout Curtains", "Wake-Up Service"],
    pricePerNight: 104,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
