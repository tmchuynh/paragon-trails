import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pacific Horizon Hotel
export const pacificHorizonHotelRooms: RoomOption[] = [
  {
    id: "hotel-seattle-2-room-1",
    name: "Heritage Single Penthouse",
    description: "This grandiose single accommodation offers where the mountains touch the sky, highlighting contemporary American style.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Balcony", "Ironing Facilities", "Kitchenette", "In-Room Safe"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 212,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
