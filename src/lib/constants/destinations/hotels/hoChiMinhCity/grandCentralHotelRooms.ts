import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Grand Central Hotel
export const grandCentralHotelRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-2-room-1",
    name: "Luxury Queen Villa",
    description: "A traditional queen villa designed for pleasant comfort, with where the ocean meets the sky and offering a unique blend of style and comfort, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Fireplace", "Refrigerator"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 464,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-ho-chi-minh-city-2-room-1",
    name: "Premium Queen Penthouse",
    description: "Our Premium-themed queen penthouse offers upscale luxury, panoramic where you can enjoy the tranquility of the mountains, and with blackout curtains for a perfect night's sleep, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Complimentary Bottled Water", "Family Room", "Soundproofing", "Ironing Facilities", "In-Room Safe"],
    pricePerNight: 429,
    currency: "VND",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
