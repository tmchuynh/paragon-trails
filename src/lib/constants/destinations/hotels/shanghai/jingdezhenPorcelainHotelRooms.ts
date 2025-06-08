import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Jingdezhen Porcelain Hotel
export const jingdezhenPorcelainHotelRooms: RoomOption[] = [
  {
    id: "hotel-shanghai-10-room-9-Double-MountainView",
    name: "Forbidden Double Penthouse",
    description: "A opulent double retreat with a view of snow-capped peaks, with classic Chinese artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 7882,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-shanghai-10-room-9-Twin-CityView",
    name: "Forbidden Twin Studio",
    description: "This compact twin studio promises where you can enjoy the city's energy, enriched by Forbidden-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 6757,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-shanghai-10-room-9-Double-CityView",
    name: "Dynasty Double Suite",
    description: "Our Dynasty-themed double suite offers heartwarming luxury, panoramic with a front-row seat to the city's heartbeat, and featuring premium bath amenities, inspired by with classic Chinese artistic influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 6565,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-shanghai-10-room-9-Single-None",
    name: "Executive Single Loft",
    description: "Step into a intimate single loft that combines Executive-themed with breathtaking with a pleasant outlook, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 4529,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
