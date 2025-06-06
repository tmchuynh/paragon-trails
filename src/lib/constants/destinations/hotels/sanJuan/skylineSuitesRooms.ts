import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-2-room-1",
    name: "Harmony Twin Suite",
    description: "Harmony-themed twin suite where you can experience the beauty of nature, created with both style and function in mind and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Refrigerator", "Streaming Services", "Connecting Rooms", "Dining Table", "Jacuzzi Tub", "Wake-Up Service"],
    pricePerNight: 337,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-san-juan-2-room-1",
    name: "Signature Twin Loft",
    description: "Signature-themed twin loft with a view of the city's waterfront, created with both style and function in mind and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Blackout Curtains", "Bathtub", "Wake-Up Service", "Soundproofing"],
    pricePerNight: 320,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
