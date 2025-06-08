import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mt. Fuji View Hotel
export const mtFujiViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-osaka-2-room-1-King-MountainView",
    name: "Lotus King Studio",
    description: "Our wide-ranging Lotus-themed studio offers with a view of the mountains' serene beauty, refreshing comfort, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 7482257,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-osaka-2-room-1-SofaBed-CityView",
    name: "Harmony Sofa Bed Suite",
    description: "Harmony-themed sofa bed suite with a backdrop of city parks and green spaces, offering the perfect balance of Eastern serenity and Western comfort and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 4322923,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-osaka-2-room-1-Single-GardenView",
    name: "Luxury Single Studio",
    description: "A retro single retreat with a view of the garden's tranquil pathways, combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4402072,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-osaka-2-room-1-Twin-CityView",
    name: "Zen Twin Studio",
    description: "Enjoy a room-filled stay in our Zen-themed twin studio, offering offering panoramic city vistas, with a spacious work area, and unique touches of combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 4280169,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
