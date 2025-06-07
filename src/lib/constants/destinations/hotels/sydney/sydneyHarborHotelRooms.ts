import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sydney Harbor Hotel
export const sydneyHarborHotelRooms: RoomOption[] = [
  {
    id: "hotel-sydney-4-room-3-Single-CityView",
    name: "Executive Single Apartment",
    description: "Relax in our relaxing artistic single apartment featuring showcasing the urban landscape, along with offering a unique blend of style and comfort and blending natural textures with modern style.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 439,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-sydney-4-room-3-Queen-GardenView",
    name: "Premium Queen Suite",
    description: "Enjoy a vast stay in our Premium-themed queen suite, offering with a view of manicured lawns and gardens, with blackout curtains for a perfect night's sleep, and unique touches of blending natural textures with modern style.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Accessible Bathroom", "Wheelchair Accessible", "Elevator"],
    pricePerNight: 779,
    currency: "AUD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-sydney-4-room-3-Double-CityView",
    name: "Koala Double Loft",
    description: "Koala-themed loft with classic decor, where the city skyline meets the horizon, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 621,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-sydney-4-room-3-Double-None",
    name: "Coral Reef Double Villa",
    description: "This relaxing double accommodation offers with a pleasant outlook, offering a relaxed yet sophisticated Australian vibe.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 517,
    currency: "AUD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
