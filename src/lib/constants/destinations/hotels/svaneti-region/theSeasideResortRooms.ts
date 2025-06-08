import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Seaside Resort
export const theSeasideResortRooms: RoomOption[] = [
  {
    id: "hotel-svaneti-region-3-room-2-Single-MountainView",
    name: "Executive Single Room",
    description: "A stretching single room designed for peaceful comfort, with with a view of the mountains' breathtaking sunsets and with blackout curtains for a perfect night's sleep, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 676,
    currency: "GEL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-svaneti-region-3-room-2-Double-OceanView",
    name: "Serenity Double Penthouse",
    description: "Serenity-themed double penthouse with a view of the tranquil sea, decorated with local artistic influences and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 951,
    currency: "GEL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-svaneti-region-3-room-2-Single-GardenView",
    name: "Horizon Single Villa",
    description: "This futuristic single accommodation offers where you can enjoy the beauty of nature, created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 636,
    currency: "GEL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-svaneti-region-3-room-2-SofaBed-None",
    name: "Luxury Sofa Bed Loft",
    description: "Step into a industrial sofa bed loft that combines Luxury-themed with breathtaking with a pleasant outlook, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 580,
    currency: "GEL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
