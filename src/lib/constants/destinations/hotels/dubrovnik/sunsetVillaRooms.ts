import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-dubrovnik-5-room-4-SofaBed-None",
    name: "Standard Sofa Bed Suite",
    description: "Discover the charm of this Standard-themed sofa bed suite, complete with grandiose ambiance, stunning with a pleasant outlook, and with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 102,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-dubrovnik-5-room-4-SofaBed-MountainView",
    name: "Horizon Sofa Bed Villa",
    description: "Enjoy a industrial stay in our Horizon-themed sofa bed villa, offering with panoramic views of the mountain landscape, with a spacious seating area, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 127,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-dubrovnik-5-room-4-Double-OceanView",
    name: "Tranquility Double Penthouse",
    description: "Experience our grandiose, grandiose double penthouse where you can watch the waves roll in, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 153,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-dubrovnik-5-room-4-Twin-CityView",
    name: "Classic Twin Suite",
    description: "This palatial twin suite promises where you can enjoy the city's energy, enriched by Classic-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 108,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
