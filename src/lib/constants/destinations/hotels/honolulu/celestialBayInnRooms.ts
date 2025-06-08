import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Celestial Bay Inn
export const celestialBayInnRooms: RoomOption[] = [
  {
    id: "hotel-honolulu-8-room-7-Queen-None",
    name: "Executive Queen Penthouse",
    description: "Step into a classic queen penthouse that combines Executive-themed with breathtaking with a pleasant outlook, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 229,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-honolulu-8-room-7-Double-None",
    name: "Classic Double Apartment",
    description: "Our Classic-themed double apartment offers eclectic luxury, panoramic with a pleasant outlook, and with carefully selected furnishings, inspired by featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 193,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-honolulu-8-room-7-Double-GardenView",
    name: "Heritage Double Villa",
    description: "Experience our deluxe, inviting double villa overlooking lush garden landscapes, with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 223,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-honolulu-8-room-7-SofaBed-MountainView",
    name: "Colonial Sofa Bed Suite",
    description: "Step into a sumptuous sofa bed suite that combines Colonial-themed with breathtaking where you can find inspiration in the mountains, complemented by with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 247,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
