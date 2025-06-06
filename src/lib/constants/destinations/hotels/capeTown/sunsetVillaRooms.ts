import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-3-room-2",
    name: "Executive Queen Room",
    description: "Executive-themed room with industrial decor, with a view of iconic landmarks, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Refrigerator", "Fireplace", "Bathtub"],
    pricePerNight: 270,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-cape-town-3-room-2",
    name: "Luxury Double Studio",
    description: "Discover the charm of this Luxury-themed double studio, complete with ample ambiance, stunning offering panoramic city vistas, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Sauna", "Jacuzzi Tub"],
    pricePerNight: 198,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-cape-town-3-room-2",
    name: "Classic Twin Suite",
    description: "A sophisticated twin suite designed for indulgent comfort, with with a view of the ocean's horizon and complete with a well-appointed bathroom, reflecting featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Blackout Curtains", "Soundproofing", "Smoke Detector", "Seating Area", "Kitchenette"],
    pricePerNight: 219,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
