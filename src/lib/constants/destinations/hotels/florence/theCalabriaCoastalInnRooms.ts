import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Calabria Coastal Inn
export const theCalabriaCoastalInnRooms: RoomOption[] = [
  {
    id: "hotel-florence-2-room-1-Queen-GardenView",
    name: "Classic Queen Studio",
    description: "This pleasant queen studio promises overlooking lush garden landscapes, enriched by Classic-themed details and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 102,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-florence-2-room-1-Twin-MountainView",
    name: "Luxury Twin Suite",
    description: "Luxury-themed suite with intimate decor, where you can enjoy the tranquility of the mountains, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Accessible Bathroom"],
    pricePerNight: 81,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-florence-2-room-1-Single-GardenView",
    name: "Classic Single Room",
    description: "This peaceful single accommodation offers with a view of the garden's vibrant colors, offering a touch of la dolce vita.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 67,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-florence-2-room-1-Twin-None",
    name: "Deluxe Twin Room",
    description: "Deluxe-themed room with indulgent decor, with a pleasant outlook, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 66,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-florence-2-room-1-Queen-MountainView",
    name: "Deluxe Queen Apartment",
    description: "Relax in our vintage calming queen apartment featuring where you can enjoy the tranquility of the mountains, along with with plush bedding for ultimate comfort and inspired by Italian Renaissance design.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 126,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-florence-2-room-1-SofaBed-GardenView",
    name: "Standard Sofa Bed Loft",
    description: "Unwind in this opulent sofa bed loft with a view of the garden's vibrant colors, including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 74,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-florence-2-room-1-SofaBed-None",
    name: "Classic Sofa Bed Villa",
    description: "Relax in our indulgent homey sofa bed villa featuring with a pleasant outlook, along with including climate control for your comfort and with classic Italian elegance.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 73,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-florence-2-room-1-Double-MountainView",
    name: "Serenity Double Room",
    description: "Experience our inviting, eclectic double room featuring awe-inspiring mountain scenery, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Elevator", "Visual Aids", "Hearing Support"],
    pricePerNight: 106,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-florence-2-room-1-Double-None",
    name: "Harmony Double Studio",
    description: "This exquisite double accommodation offers with a pleasant outlook, featuring tasteful Mediterranean touches.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
