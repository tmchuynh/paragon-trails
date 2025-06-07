import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-cartagena-6-room-5-Twin-None",
    name: "Andean Twin Penthouse",
    description: "This compact twin penthouse promises with a pleasant outlook, enriched by Andean-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 2621896254,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-cartagena-6-room-5-SofaBed-OceanView",
    name: "Cartagena Sofa Bed Loft",
    description: "Unwind in this roomy sofa bed loft where you can feel the ocean breeze, with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 3340556881,
    currency: "COP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-cartagena-6-room-5-Double-None",
    name: "Signature Double Apartment",
    description: "Signature-themed double apartment with a pleasant outlook, featuring handcrafted local motifs and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 2804546169,
    currency: "COP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-cartagena-6-room-5-SofaBed-MountainView",
    name: "Andean Sofa Bed Penthouse",
    description: "Indulge in the bohemian atmosphere of our sofa bed penthouse, with spectacular where you can enjoy the mountains' majestic presence, offering a lively and welcoming space, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 2698964138,
    currency: "COP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
