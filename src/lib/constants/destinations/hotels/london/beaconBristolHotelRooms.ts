import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Beacon Bristol Hotel
export const beaconBristolHotelRooms: RoomOption[] = [
  {
    id: "hotel-london-4-room-3-Single-GardenView",
    name: "Luxury Single Penthouse",
    description: "This ornate single penthouse promises where you can take in the fresh air, enriched by Luxury-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 111,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-london-4-room-3-Queen-CityView",
    name: "Executive Queen Loft",
    description: "Discover the charm of this Executive-themed queen loft, complete with vast ambiance, stunning overlooking the vibrant cityscape, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 178,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-london-4-room-3-Double-CityView",
    name: "Royal Double Loft",
    description: "A intimate double loft designed for comfortable comfort, with where you can watch the city wake up and with high-speed internet access, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 135,
    currency: "GBP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-london-4-room-3-Double-None",
    name: "Executive Double Penthouse",
    description: "A intimate double penthouse designed for regal comfort, with with a pleasant outlook and with blackout curtains for a perfect night's sleep, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 128,
    currency: "GBP",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
