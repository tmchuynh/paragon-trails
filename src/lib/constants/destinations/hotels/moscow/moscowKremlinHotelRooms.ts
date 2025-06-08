import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Moscow Kremlin Hotel
export const moscowKremlinHotelRooms: RoomOption[] = [
  {
    id: "hotel-moscow-4-room-3-King-CityView",
    name: "Snowflake King Studio",
    description: "Our intimate Snowflake-themed studio offers with a view of iconic landmarks, snug comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 1984489,
    currency: "RUB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-moscow-4-room-3-SofaBed-CityView",
    name: "Signature Sofa Bed Penthouse",
    description: "A relaxing sofa bed retreat offering panoramic city vistas, with rich fabrics and ornate details.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 1138104,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-moscow-4-room-3-King-MountainView",
    name: "Luxury King Studio",
    description: "This lavish king accommodation offers with a view of snow-capped peaks, with rich fabrics and ornate details.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 2078741,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-moscow-4-room-3-Double-None",
    name: "Signature Double Studio",
    description: "This prestigious double accommodation offers with a pleasant outlook, offering a warm retreat from the cold outside.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 1255071,
    currency: "RUB",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
