import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Mt. Fuji View Hotel
export const mtFujiViewHotelRooms: RoomOption[] = [
  {
    id: "hotel-yokohama-7-room-6-SofaBed-GardenView",
    name: "Signature Sofa Bed Villa",
    description: "Signature-themed villa with spacious decor, with a view of tranquil water features, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 4455393,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-yokohama-7-room-6-SofaBed-None",
    name: "Zen Sofa Bed Suite",
    description: "Zen-themed sofa bed suite with a pleasant outlook, with minimalist Japanese aesthetics and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 4004975,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-yokohama-7-room-6-SofaBed-OceanView",
    name: "Sakura Sofa Bed Apartment",
    description: "This luxurious sofa bed accommodation offers featuring uninterrupted ocean vistas, offering the perfect balance of Eastern serenity and Western comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 5539822,
    currency: "JPY",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-yokohama-7-room-6-SofaBed-CityView",
    name: "Bamboo Sofa Bed Studio",
    description: "Experience our sizable, wide-ranging sofa bed studio with a window to the bustling city below, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 4182987,
    currency: "JPY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
