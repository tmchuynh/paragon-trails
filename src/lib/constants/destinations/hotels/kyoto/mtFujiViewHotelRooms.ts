import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mt. Fuji View Hotel
export const mtFujiViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-kyoto-2-room-1-Double-CityView",
    name: "Harmony Double Penthouse",
    description: "Discover the charm of this Harmony-themed double penthouse, complete with minimalist ambiance, stunning offering panoramic city vistas, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 4581776,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-kyoto-2-room-1-Single-GardenView",
    name: "Premium Single Apartment",
    description: "Step into a peaceful single apartment that combines Premium-themed with breathtaking with a view of tranquil water features, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 4095193,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-kyoto-2-room-1-King-OceanView",
    name: "Superior King Penthouse",
    description: "Unwind in this intimate king penthouse with a view of the sandy beaches, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 8366690,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-kyoto-2-room-1-Queen-None",
    name: "Bamboo Queen Penthouse",
    description: "A luxurious queen penthouse designed for glamorous comfort, with with a pleasant outlook and with a private balcony or terrace, reflecting combining modern luxury with Japanese tradition.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 5157956,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
