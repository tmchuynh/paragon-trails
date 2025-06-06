import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mt. Fuji View Hotel
export const mt.FujiViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-3-room-2",
    name: "Lotus Twin Penthouse",
    description: "Relax in our serene stylish twin penthouse featuring where you can escape to the mountains, along with with a spacious work area and offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Connecting Rooms", "Balcony", "Accessible Room", "Sauna", "Refrigerator"],
    pricePerNight: 249,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-yokohama-3-room-2",
    name: "Sakura Twin Villa",
    description: "Our Sakura-themed twin villa offers expansive luxury, panoramic where the city skyline meets the horizon, and featuring premium bath amenities, inspired by combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fireplace", "Seating Area", "Kitchenette", "Jacuzzi Tub"],
    pricePerNight: 217,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
