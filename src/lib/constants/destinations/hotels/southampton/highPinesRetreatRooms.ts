import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for High Pines Retreat
export const highPinesRetreatRooms: RoomOption[] = [
  {
    id: "hotel-southampton-13-room-12-King-GardenView",
    name: "Luxury King Penthouse",
    description: "Luxury-themed penthouse with refined decor, with a view of colorful flower beds, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 181,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-southampton-13-room-12-Twin-GardenView",
    name: "Tranquility Twin Suite",
    description: "Discover the charm of this Tranquility-themed twin suite, complete with avant-garde ambiance, stunning with a view of colorful flower beds, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 119,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-southampton-13-room-12-SofaBed-OceanView",
    name: "Deluxe Sofa Bed Loft",
    description: "This regal sofa bed accommodation offers where you can watch the waves roll in, designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 138,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-southampton-13-room-12-King-OceanView",
    name: "Executive King Studio",
    description: "A industrial king retreat where you can watch the waves roll in, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 205,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
