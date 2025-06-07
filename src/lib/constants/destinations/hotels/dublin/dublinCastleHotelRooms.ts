import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Dublin Castle Hotel
export const dublinCastleHotelRooms: RoomOption[] = [
  {
    id: "hotel-dublin-2-room-1-Queen-OceanView",
    name: "Standard Queen Loft",
    description: "Enjoy a elegant stay in our Standard-themed queen loft, offering with breathtaking sea views, with a luxurious soaking tub, and unique touches of featuring cozy interiors with Irish-inspired decor.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 123,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-dublin-2-room-1-SofaBed-OceanView",
    name: "Deluxe Sofa Bed Penthouse",
    description: "Deluxe-themed penthouse with industrial decor, where you can enjoy the ocean's beauty, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 95,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-dublin-2-room-1-King-None",
    name: "Standard King Suite",
    description: "Experience our snug, sleek king suite with a pleasant outlook, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 110,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-dublin-2-room-1-SofaBed-MountainView",
    name: "Executive Sofa Bed Villa",
    description: "Unwind in this refreshing sofa bed villa where you can gaze at the towering peaks, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 101,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
