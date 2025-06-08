import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage House
export const heritageHouseRooms: RoomOption[] = [
  {
    id: "hotel-boston-4-room-3-Queen-MountainView",
    name: "Signature Queen Studio",
    description: "Unwind in this glamorous queen studio with a view of the mountains' natural beauty, with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 344,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-boston-4-room-3-Double-None",
    name: "Liberty Double Suite",
    description: "Step into a opulent double suite that combines Liberty-themed with breathtaking with a pleasant outlook, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 218,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-boston-4-room-3-Twin-GardenView",
    name: "Luxury Twin Loft",
    description: "Relax in our peaceful sumptuous twin loft featuring where you can relax in a natural oasis, along with with a luxurious soaking tub and featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 237,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-boston-4-room-3-SofaBed-OceanView",
    name: "Standard Sofa Bed Room",
    description: "Discover the charm of this Standard-themed sofa bed room, complete with sleek ambiance, stunning where you can hear the soothing sound of the sea, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 266,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
