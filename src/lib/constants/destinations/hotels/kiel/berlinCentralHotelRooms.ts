import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Berlin Central Hotel
export const berlinCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-kiel-10-room-9-Queen-OceanView",
    name: "Standard Queen Studio",
    description: "Unwind in this grandiose queen studio with a private balcony overlooking the sea, with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 137,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-kiel-10-room-9-SofaBed-GardenView",
    name: "Horizon Sofa Bed Apartment",
    description: "Horizon-themed sofa bed apartment with a view of the garden's vibrant colors, designed for ultimate comfort and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 96,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-kiel-10-room-9-SofaBed-None",
    name: "Harmony Sofa Bed Suite",
    description: "This expansive sofa bed suite promises with a pleasant outlook, enriched by Harmony-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 71,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-kiel-10-room-9-King-CityView",
    name: "Modern King Penthouse",
    description: "Our Modern-themed king penthouse offers retro luxury, panoramic where you can enjoy the city's energy, and with a spacious seating area, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 139,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
