import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Harbor House
export const theHarborHouseRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-2-room-1",
    name: "Hamilton King Apartment",
    description: "Experience our traditional, extensive king apartment surrounded by vibrant flora, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Kitchenette", "Soundproofing", "Books", "Dining Table"],
    pricePerNight: 323,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-bermuda-2-room-1",
    name: "Executive Sofa Bed Loft",
    description: "This palatial sofa bed accommodation offers where city lights twinkle at night, blending seaside charm with refined comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "In-Room Safe", "Outdoor Furniture", "Sauna", "Flat-Screen TV"],
    pricePerNight: 182,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
