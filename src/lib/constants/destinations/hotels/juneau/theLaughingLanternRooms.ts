import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Laughing Lantern
export const theLaughingLanternRooms: RoomOption[] = [
  {
    id: "hotel-juneau-1-room-0-Twin-None",
    name: "Deluxe Twin Apartment",
    description: "Discover the charm of this Deluxe-themed twin apartment, complete with pleasant ambiance, stunning with a pleasant outlook, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 91,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-juneau-1-room-0-Twin-GardenView",
    name: "Pioneer Twin Villa",
    description: "Pioneer-themed villa with palatial decor, where you can enjoy the tranquility of nature, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 101,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-juneau-1-room-0-Double-GardenView",
    name: "Pioneer Double Room",
    description: "A traditional double room designed for roomy comfort, with where you can enjoy the garden's seasonal blooms and with blackout curtains for a perfect night's sleep, reflecting offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 115,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-juneau-1-room-0-Twin-MountainView",
    name: "Premium Twin Villa",
    description: "Our fashionable Premium-themed villa offers with panoramic views of the mountain landscape, modern comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 104,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  }
];
