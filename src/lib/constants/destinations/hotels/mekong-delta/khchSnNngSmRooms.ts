import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Khách Sạn Nắng Sớm
export const khchSnNngSmRooms: RoomOption[] = [
  {
    id: "hotel-mekong-delta-10-room-9-SofaBed-None",
    name: "Serenity Sofa Bed Penthouse",
    description: "Discover the charm of this Serenity-themed sofa bed penthouse, complete with stylish ambiance, stunning with a pleasant outlook, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 4481131,
    currency: "VND",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-mekong-delta-10-room-9-Twin-None",
    name: "Deluxe Twin Penthouse",
    description: "Deluxe-themed penthouse with stretching decor, with a pleasant outlook, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 4137112,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-mekong-delta-10-room-9-Double-CityView",
    name: "Executive Double Apartment",
    description: "A contemporary double apartment designed for extravagant comfort, with with a view of iconic landmarks and offering a unique blend of style and comfort, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 5068824,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-mekong-delta-10-room-9-Queen-GardenView",
    name: "Harmony Queen Penthouse",
    description: "This voluminous queen penthouse promises where you can unwind in a garden paradise, enriched by Harmony-themed details and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 6554766,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
