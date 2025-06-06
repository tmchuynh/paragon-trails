import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Nippon Prestige
export const nipponPrestigeRooms: RoomOption[] = [
  {
    id: "hotel-tokyo-2-room-1",
    name: "Harmony Sofa Bed Studio",
    description: "Enjoy a homey stay in our Harmony-themed sofa bed studio, offering with a view of the mountains' natural beauty, complete with a well-appointed bathroom, and unique touches of offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Jacuzzi Tub", "Luggage Rack", "Kitchenette", "Accessible Room"],
    pricePerNight: 282,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-tokyo-2-room-1",
    name: "Harmony Double Loft",
    description: "A traditional double retreat where city lights twinkle at night, with minimalist Japanese aesthetics.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Connecting Rooms"],
    pricePerNight: 248,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
