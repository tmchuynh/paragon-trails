import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Stony Creek Inn
export const theStonyCreekInnRooms: RoomOption[] = [
  {
    id: "hotel-tangier-7-room-6-Queen-None",
    name: "Deluxe Queen Suite",
    description: "Discover the charm of this Deluxe-themed queen suite, complete with generous ambiance, stunning with a pleasant outlook, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    accessibilityFeatures: ["Visual Aids", "Accessible Bathroom", "Hearing Support"],
    pricePerNight: 43658,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-tangier-7-room-6-Twin-None",
    name: "Classic Twin Room",
    description: "Unwind in this indulgent twin room with a pleasant outlook, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 28503,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-tangier-7-room-6-SofaBed-None",
    name: "Serenity Sofa Bed Penthouse",
    description: "This large-scale sofa bed penthouse promises with a pleasant outlook, enriched by Serenity-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 28703,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-tangier-7-room-6-Double-MountainView",
    name: "Luxury Double Room",
    description: "Step into a indulgent double room that combines Luxury-themed with breathtaking with a view of the mountains' serene beauty, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 44694,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
