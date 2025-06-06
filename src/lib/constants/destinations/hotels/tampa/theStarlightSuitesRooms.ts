import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Starlight Suites
export const theStarlightSuitesRooms: RoomOption[] = [
  {
    id: "hotel-tampa-1-room-0-Twin-GardenView",
    name: "Deluxe Twin Studio",
    description: "This commodious twin studio promises with serene garden views, enriched by Deluxe-themed details and with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 147,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-tampa-1-room-0-Queen-None",
    name: "Pioneer Queen Apartment",
    description: "Our Pioneer-themed queen apartment offers soft luxury, panoramic with a pleasant outlook, and including climate control for your comfort, inspired by featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 170,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-tampa-1-room-0-SofaBed-GardenView",
    name: "Classic Sofa Bed Studio",
    description: "This generous sofa bed studio promises with a view of manicured lawns and gardens, enriched by Classic-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Elevator", "Wheelchair Accessible"],
    pricePerNight: 130,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-tampa-1-room-0-Single-CityView",
    name: "Manhattan Single Suite",
    description: "Manhattan-themed single suite with a view of iconic landmarks, featuring sleek urban design elements and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 114,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-tampa-1-room-0-Single-OceanView",
    name: "Manhattan Single Penthouse",
    description: "Manhattan-themed single penthouse where you can relax to the sound of the waves, with rustic and modern influences and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 146,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-tampa-1-room-0-King-OceanView",
    name: "Superior King Villa",
    description: "Our eclectic Superior-themed villa offers with a view of the endless blue, stylish comfort, and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 226,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
