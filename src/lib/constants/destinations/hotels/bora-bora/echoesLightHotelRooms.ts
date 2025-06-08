import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Echoes & Light Hotel
export const echoesLightHotelRooms: RoomOption[] = [
  {
    id: "hotel-bora-bora-1-room-0-Queen-GardenView",
    name: "Tranquility Queen Studio",
    description: "Experience our refreshing, fashionable queen studio where you can enjoy the tranquility of nature, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 18129,
    currency: "XPF",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-bora-bora-1-room-0-Queen-None",
    name: "Serenity Queen Apartment",
    description: "Unwind in this chic queen apartment with a pleasant outlook, featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 14479,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-bora-bora-1-room-0-King-MountainView",
    name: "Tranquility King Studio",
    description: "Tranquility-themed king studio with a view of the rugged mountain landscape, featuring thoughtful design elements and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 22219,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-bora-bora-1-room-0-Double-OceanView",
    name: "Luxury Double Loft",
    description: "This vintage double accommodation offers with a view of the ocean's changing tides, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 16485,
    currency: "XPF",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
