import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-lima-5-room-4",
    name: "Amazonia King Villa",
    description: "Relax in our compact rustic king villa featuring where you can escape to the mountains, along with with carefully selected furnishings and blending rich cultural heritage with comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Ironing Facilities", "Board Games"],
    pricePerNight: 177,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-lima-5-room-4",
    name: "Amazonia King Villa",
    description: "Amazonia-themed king villa with a pleasant outlook, highlighting the natural beauty of the region and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Accessible Room", "Outdoor Furniture", "Refrigerator"],
    pricePerNight: 134,
    currency: "PEN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-lima-5-room-4",
    name: "Standard Twin Apartment",
    description: "Standard-themed apartment with restful decor, where you can enjoy the city's energy, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Fireplace", "Family Room", "Bluetooth Speaker", "Streaming Services"],
    pricePerNight: 90,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
