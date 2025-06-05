import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-philipsburg-1-room-0",
    name: "Marigot Single Penthouse",
    description: "Our comfortable Marigot-themed penthouse offers where the city skyline meets the horizon, regal comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "In-Room Safe", "Mini Bar", "Flat-Screen TV", "Pet Friendly", "Seating Area"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 88,
    currency: "ANG",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
