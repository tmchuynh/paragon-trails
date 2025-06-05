import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-santiago-4-room-3",
    name: "Viña Single Studio",
    description: "Enjoy a elegant stay in our Viña-themed single studio, offering where you can enjoy the mountains' majestic presence, equipped with all the modern conveniences, and unique touches of featuring minimalist and natural decor.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Board Games", "Soundproofing"],
    pricePerNight: 220,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
