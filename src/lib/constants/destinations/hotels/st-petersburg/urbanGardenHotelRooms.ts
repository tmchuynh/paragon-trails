import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-st-petersburg-2-room-1-Queen-None",
    name: "Harmony Queen Villa",
    description: "A prestigious queen retreat with a pleasant outlook, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 12397,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-st-petersburg-2-room-1-Single-GardenView",
    name: "Premium Single Room",
    description: "This airy single accommodation offers where you can unwind in a garden paradise, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 8606,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-st-petersburg-2-room-1-SofaBed-None",
    name: "Deluxe Sofa Bed Studio",
    description: "Step into a vast sofa bed studio that combines Deluxe-themed with breathtaking with a pleasant outlook, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 8846,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-st-petersburg-2-room-1-Double-CityView",
    name: "Classic Double Studio",
    description: "Classic-themed double studio featuring a blend of modern and historic architecture, designed for ultimate comfort and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 10295,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
