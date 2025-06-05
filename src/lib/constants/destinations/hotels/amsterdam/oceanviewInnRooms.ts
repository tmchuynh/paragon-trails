import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Oceanview Inn
export const oceanviewInnRooms: RoomOption[] = [
  {
    id: "hotel-amsterdam-2-room-1",
    name: "Classic Queen Loft",
    description: "A comfortable queen loft designed for artistic comfort, with where you can watch the city wake up and with a spacious work area, reflecting designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Blackout Curtains", "Complimentary Bottled Water"],
    pricePerNight: 172,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-amsterdam-2-room-1",
    name: "Tranquility Twin Studio",
    description: "A vast twin retreat where you can enjoy the serenity of mountain life, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Wake-Up Service", "Kitchenette", "Streaming Services", "Balcony", "Ironing Facilities"],
    pricePerNight: 154,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-amsterdam-2-room-1",
    name: "Horizon Twin Room",
    description: "This restful twin room promises with a view of iconic landmarks, enriched by Horizon-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Mini Bar", "Kitchenette", "Dining Table", "Bluetooth Speaker", "Smoke Detector"],
    pricePerNight: 129,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-amsterdam-2-room-1",
    name: "Harmony Double Loft",
    description: "This snug double accommodation offers with a view of colorful flower beds, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Streaming Services", "Ironing Facilities", "Bluetooth Speaker", "In-Room Safe", "Outdoor Furniture"],
    pricePerNight: 138,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
