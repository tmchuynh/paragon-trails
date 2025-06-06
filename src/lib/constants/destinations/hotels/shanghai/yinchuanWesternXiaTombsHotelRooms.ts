import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Yinchuan Western Xia Tombs Hotel
export const yinchuanWesternXiaTombsHotelRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-2-room-1-SofaBed-CityView",
    name: "Premium Sofa Bed Apartment",
    description: "Our Premium-themed sofa bed apartment offers grandiose luxury, panoramic with stunning views of the city skyline, and with plush bedding for ultimate comfort, inspired by with classic Chinese artistic influences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 5636,
    currency: "CNY",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-shanghai-2-room-1-Double-None",
    name: "Imperial Double Studio",
    description: "This sizable double accommodation offers with a pleasant outlook, featuring elegant calligraphy and silk accents.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 5110,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-shanghai-2-room-1-SofaBed-MountainView",
    name: "Silk Sofa Bed Apartment",
    description: "Step into a elegant sofa bed apartment that combines Silk-themed with breathtaking with a view of the mountains' serene beauty, complemented by offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 5727,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-shanghai-2-room-1-King-CityView",
    name: "Imperial King Penthouse",
    description: "Imperial-themed king penthouse where the city comes alive at dusk, blending imperial tradition with modern design and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 7811,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
