import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Khu Nghỉ Dưỡng Núi Ngọc
export const khuNghDngNiNgcRooms: RoomOption[] = [
  {
    id: "hotel-sapa-3-room-2-King-MountainView",
    name: "Indochine King Apartment",
    description: "A ample king apartment designed for expansive comfort, with where you can experience the beauty of nature and with a private balcony or terrace, reflecting with traditional Vietnamese decor.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 243036222248,
    currency: "VND",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-sapa-3-room-2-Queen-None",
    name: "Superior Queen Apartment",
    description: "This intimate queen apartment promises with a pleasant outlook, enriched by Superior-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 152593110825,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-sapa-3-room-2-Single-OceanView",
    name: "Executive Single Room",
    description: "This relaxing single room promises with a view of the sandy beaches, enriched by Executive-themed details and with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 143902262946,
    currency: "VND",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-sapa-3-room-2-King-None",
    name: "Deluxe King Villa",
    description: "This deluxe king villa promises with a pleasant outlook, enriched by Deluxe-themed details and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 180831637329,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
