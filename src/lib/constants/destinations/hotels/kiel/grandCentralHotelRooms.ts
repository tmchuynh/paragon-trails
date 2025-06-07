import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-kiel-2-room-1-King-GardenView",
    name: "Deluxe King Villa",
    description: "Our Deluxe-themed king villa offers prestigious luxury, panoramic where you can enjoy the garden's seasonal blooms, and featuring a curated minibar selection, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 126,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-kiel-2-room-1-Twin-CityView",
    name: "Horizon Twin Penthouse",
    description: "Experience our gentle, welcoming twin penthouse with a window to the bustling city below, with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 73,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-kiel-2-room-1-Queen-GardenView",
    name: "Classic Queen Villa",
    description: "This extravagant queen accommodation offers with a view of the garden's tranquil pathways, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 100,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-kiel-2-room-1-King-OceanView",
    name: "Tranquility King Room",
    description: "Enjoy a prestigious stay in our Tranquility-themed king room, offering with breathtaking sea views, with high-speed internet access, and unique touches of created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 155,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
