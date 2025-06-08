import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Moonlit Marsh Manor
export const moonlitMarshManorRooms: RoomOption[] = [
  {
    id: "hotel-anchorage-8-room-7-King-None",
    name: "Signature King Studio",
    description: "Discover the charm of this Signature-themed king studio, complete with minimalist ambiance, stunning with a pleasant outlook, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 145,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-anchorage-8-room-7-SofaBed-MountainView",
    name: "Classic Sofa Bed Villa",
    description: "Step into a extensive sofa bed villa that combines Classic-themed with breathtaking where the mountains touch the sky, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 112,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-anchorage-8-room-7-Double-None",
    name: "Pioneer Double Villa",
    description: "Step into a intimate double villa that combines Pioneer-themed with breathtaking with a pleasant outlook, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 100,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-anchorage-8-room-7-King-CityView",
    name: "Golden Gate King Loft",
    description: "A serene king loft designed for elegant comfort, with with a front-row seat to the city's heartbeat and including climate control for your comfort, reflecting offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 148,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
