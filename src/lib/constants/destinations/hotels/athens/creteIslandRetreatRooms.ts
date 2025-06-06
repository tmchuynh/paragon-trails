import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Crete Island Retreat
export const creteIslandRetreatRooms: RoomOption[] = [
  {
    id: "hotel-athens-3-room-2-Single-OceanView",
    name: "Mykonos Single Penthouse",
    description: "This intimate single penthouse promises where you can enjoy the ocean's beauty, enriched by Mykonos-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 177,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-athens-3-room-2-Double-None",
    name: "Olive Double Studio",
    description: "Discover the charm of this Olive-themed double studio, complete with indulgent ambiance, stunning with a pleasant outlook, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible", "Visual Aids"],
    pricePerNight: 157,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-athens-3-room-2-Queen-None",
    name: "Executive Queen Suite",
    description: "A ornate queen suite designed for deluxe comfort, with with a pleasant outlook and with plush bedding for ultimate comfort, reflecting featuring Aegean-inspired decor with blue and white tones.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 184,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-athens-3-room-2-King-CityView",
    name: "Executive King Suite",
    description: "Executive-themed suite with industrial decor, where you can watch the city wake up, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 230,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-athens-3-room-2-Double-CityView",
    name: "Premium Double Suite",
    description: "Unwind in this glamorous double suite where you can enjoy the city's energy, with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 189,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-athens-3-room-2-King-None",
    name: "Mykonos King Room",
    description: "Unwind in this grandiose king room with a pleasant outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 252,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-athens-3-room-2-SofaBed-MountainView",
    name: "Executive Sofa Bed Villa",
    description: "Our modern Executive-themed villa offers with a view of the mountains' changing seasons, traditional comfort, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 168,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
