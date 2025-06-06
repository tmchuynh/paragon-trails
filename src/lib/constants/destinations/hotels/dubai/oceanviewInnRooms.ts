import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-dubai-4-room-3",
    name: "Dubai Skyline King Suite",
    description: "A refreshing king retreat with a pleasant outlook, featuring opulent Arabian-inspired decor.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Outdoor Furniture", "Smoke Detector", "Complimentary Bottled Water"],
    pricePerNight: 308,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
