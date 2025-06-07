import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Metropolitan
export const theMetropolitanRooms: RoomOption[] = [
  {
    id: "hotel-tampa-3-room-2-Single-OceanView",
    name: "Colonial Single Suite",
    description: "Relax in our avant-garde restful single suite featuring where the horizon meets the ocean, along with including climate control for your comfort and offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 109,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-tampa-3-room-2-Double-CityView",
    name: "Superior Double Villa",
    description: "A stretching double villa designed for comfy comfort, with with a view of the city's waterfront and offering a unique blend of style and comfort, reflecting with rustic and modern influences.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 135,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-tampa-3-room-2-Queen-CityView",
    name: "Standard Queen Penthouse",
    description: "This peaceful queen penthouse promises with a view of iconic landmarks, enriched by Standard-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 160,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-tampa-3-room-2-SofaBed-None",
    name: "Superior Sofa Bed Studio",
    description: "Step into a opulent sofa bed studio that combines Superior-themed with breathtaking with a pleasant outlook, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Hearing Support"],
    pricePerNight: 93,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
