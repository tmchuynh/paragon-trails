import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Maplewood Manor
export const maplewoodManorRooms: RoomOption[] = [
  {
    id: "hotel-miami-1-room-0-SofaBed-CityView",
    name: "Pioneer Sofa Bed Studio",
    description: "This peaceful sofa bed studio promises where you can watch the city wake up, enriched by Pioneer-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 88,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-miami-1-room-0-King-None",
    name: "Deluxe King Penthouse",
    description: "Experience our prestigious, extensive king penthouse with a pleasant outlook, with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Hearing Support", "Wheelchair Accessible", "Elevator"],
    pricePerNight: 144,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-miami-1-room-0-Double-None",
    name: "Standard Double Studio",
    description: "Our Standard-themed double studio offers ample luxury, panoramic with a pleasant outlook, and with carefully selected furnishings, inspired by with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 87,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-miami-1-room-0-Double-CityView",
    name: "Executive Double Room",
    description: "Relax in our futuristic intimate double room featuring where you can watch the city wake up, along with equipped with all the modern conveniences and offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 101,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
