import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-venice-4-room-3",
    name: "Deluxe Twin Room",
    description: "Our Deluxe-themed twin room offers chic luxury, panoramic overlooking spectacular mountain ranges, and with a modern en-suite bathroom, inspired by with classic Italian elegance.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Luggage Rack", "Outdoor Furniture", "Bathtub", "Dining Table", "Refrigerator"],
    pricePerNight: 146,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-venice-4-room-3",
    name: "Classic Twin Loft",
    description: "A roomy twin loft designed for intimate comfort, with overlooking the sparkling ocean waves and complete with a well-appointed bathroom, reflecting featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Ironing Facilities", "Soundproofing", "Outdoor Furniture", "Bluetooth Speaker", "Streaming Services"],
    pricePerNight: 136,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-venice-4-room-3",
    name: "Standard King Room",
    description: "Indulge in the upscale atmosphere of our king room, with spectacular featuring uninterrupted ocean vistas, with classic Italian elegance, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bluetooth Speaker", "Wake-Up Service", "Soundproofing"],
    pricePerNight: 232,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
