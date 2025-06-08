import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Pearl Break Hotel
export const thePearlBreakHotelRooms: RoomOption[] = [
  {
    id: "hotel-fez-2-room-1-King-CityView",
    name: "Executive King Villa",
    description: "Relax in our glamorous lavish king villa featuring with a window to the bustling city below, along with with a luxurious soaking tub and designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 32741,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-fez-2-room-1-Queen-GardenView",
    name: "Standard Queen Studio",
    description: "Standard-themed studio with opulent decor, with a view of the garden's lush greenery, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 25115,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-fez-2-room-1-Single-CityView",
    name: "Superior Single Loft",
    description: "Step into a eclectic single loft that combines Superior-themed with breathtaking with a view of the city's cultural landmarks, complemented by with a spacious work area.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 17604,
    currency: "MAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-fez-2-room-1-Twin-None",
    name: "Signature Twin Studio",
    description: "Relax in our stretching stretching twin studio featuring with a pleasant outlook, along with complete with a well-appointed bathroom and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 18285,
    currency: "MAD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
