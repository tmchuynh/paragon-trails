import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Superior Single Villa",
    description: "A snug single retreat where the city skyline meets the horizon, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "In-Room Safe", "Sauna", "Ironing Facilities", "Refrigerator", "Wake-Up Service"],
    pricePerNight: 147,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Serenity Double Penthouse",
    description: "Indulge in the pleasant atmosphere of our double penthouse, with spectacular overlooking the vibrant cityscape, designed for ultimate comfort, and with a spacious work area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Flat-Screen TV", "Mini Bar"],
    pricePerNight: 185,
    currency: "BRL",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Standard Double Room",
    description: "Enjoy a deluxe stay in our Standard-themed double room, offering with a pleasant outlook, with plush bedding for ultimate comfort, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Fitness Equipment", "Balcony", "Dining Table"],
    pricePerNight: 153,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-rio-de-janeiro-2-room-1",
    name: "Serenity Twin Suite",
    description: "A retro twin retreat where you can hear the soothing sound of the sea, created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Bathtub", "Flat-Screen TV"],
    pricePerNight: 182,
    currency: "BRL",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
