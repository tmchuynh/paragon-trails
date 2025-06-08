import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Helix Dome Hotel
export const theHelixDomeHotelRooms: RoomOption[] = [
  {
    id: "hotel-reykjavik-2-room-1-Double-None",
    name: "Modern Double Penthouse",
    description: "Indulge in the luxurious atmosphere of our double penthouse, with spectacular with a pleasant outlook, designed for ultimate comfort, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 1719803,
    currency: "ISK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-reykjavik-2-room-1-King-GardenView",
    name: "Premium King Room",
    description: "Step into a chic king room that combines Premium-themed with breathtaking where you can enjoy the garden's peaceful atmosphere, complemented by with a luxurious soaking tub.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 2823558,
    currency: "ISK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-reykjavik-2-room-1-Twin-GardenView",
    name: "Tranquility Twin Penthouse",
    description: "This plush twin accommodation offers with serene garden views, designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 1941957,
    currency: "ISK",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-reykjavik-2-room-1-Single-GardenView",
    name: "Classic Single Apartment",
    description: "Discover the charm of this Classic-themed single apartment, complete with extensive ambiance, stunning with a view of manicured lawns and gardens, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 1752888,
    currency: "ISK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  }
];
