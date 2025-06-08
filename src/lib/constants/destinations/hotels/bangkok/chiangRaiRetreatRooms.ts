import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Chiang Rai Retreat
export const chiangRaiRetreatRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-1-room-0-King-MountainView",
    name: "Luxury King Suite",
    description: "Relax in our ample voluminous king suite featuring where you can enjoy the tranquility of the mountains, along with featuring a curated minibar selection and adorned with Thai-inspired decor.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 203517,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-bangkok-1-room-0-Double-GardenView",
    name: "Tropical Double Studio",
    description: "Unwind in this gentle double studio where you can enjoy the sights and sounds of nature, with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 123569,
    currency: "THB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-bangkok-1-room-0-Single-None",
    name: "Jasmine Single Villa",
    description: "Our soothing Jasmine-themed villa offers with a pleasant outlook, traditional comfort, and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 92409,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bangkok-1-room-0-Single-MountainView",
    name: "Signature Single Apartment",
    description: "This comfy single apartment promises where the mountains touch the sky, enriched by Signature-themed details and with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 124233,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
