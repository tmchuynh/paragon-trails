import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Cayman Islands Heritage Hotel
export const theCaymanIslandsHeritageHotelRooms: RoomOption[] = [
  {
    id: "hotel-george-town-2-room-1-SofaBed-OceanView",
    name: "Modern Sofa Bed Suite",
    description: "Modern-themed sofa bed suite with a private balcony overlooking the sea, created with both style and function in mind and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 90,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-george-town-2-room-1-Double-OceanView",
    name: "Signature Double Room",
    description: "This opulent double room promises with a view of the tranquil sea, enriched by Signature-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom"],
    pricePerNight: 103,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-george-town-2-room-1-Double-MountainView",
    name: "Classic Double Suite",
    description: "Our restful Classic-themed suite offers with a view of the mountains' breathtaking sunsets, luxurious comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 113,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-george-town-2-room-1-Double-CityView",
    name: "Luxury Double Room",
    description: "Indulge in the refreshing atmosphere of our double room, with spectacular with a view of iconic landmarks, designed for ultimate comfort, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 96,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-george-town-2-room-1-Single-MountainView",
    name: "Premium Single Apartment",
    description: "Step into a tranquil single apartment that combines Premium-themed with breathtaking with a view of the rugged mountain landscape, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 86,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-george-town-2-room-1-Double-GardenView",
    name: "Serenity Double Room",
    description: "Our Serenity-themed double room offers traditional luxury, panoramic with a view of the garden's tranquil pathways, and with a modern en-suite bathroom, inspired by featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    accessibilityFeatures: ["Visual Aids", "Elevator", "Accessible Bathroom"],
    pricePerNight: 94,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-george-town-2-room-1-SofaBed-MountainView",
    name: "Classic Sofa Bed Studio",
    description: "A intimate sofa bed studio designed for tasteful comfort, with where the mountains touch the sky and with a spacious seating area, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 95,
    currency: "KYD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-george-town-2-room-1-Queen-None",
    name: "Luxury Queen Suite",
    description: "Relax in our wide-ranging pleasant queen suite featuring with a pleasant outlook, along with including climate control for your comfort and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Hearing Support"],
    pricePerNight: 97,
    currency: "KYD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
