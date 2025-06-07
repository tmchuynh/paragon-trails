import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Silk Road Retreat
export const silkRoadRetreatRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-4-room-3-King-CityView",
    name: "Superior King Penthouse",
    description: "A prestigious king penthouse designed for compact comfort, with where the city skyline meets the horizon and offering a unique blend of style and comfort, reflecting offering a refined and harmonious ambiance.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 7779,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-shanghai-4-room-3-King-None",
    name: "Standard King Studio",
    description: "Our ornate Standard-themed studio offers with a pleasant outlook, sleek comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 7229,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-shanghai-4-room-3-Queen-GardenView",
    name: "Silk Queen Apartment",
    description: "Discover the charm of this Silk-themed queen apartment, complete with elegant ambiance, stunning overlooking lush garden landscapes, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 7414,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-shanghai-4-room-3-SofaBed-None",
    name: "Standard Sofa Bed Room",
    description: "This regal sofa bed accommodation offers with a pleasant outlook, offering a refined and harmonious ambiance.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4023,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
