import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-8-room-7-Twin-CityView",
    name: "Executive Twin Room",
    description: "Step into a heartwarming twin room that combines Executive-themed with breathtaking with a window to the bustling city below, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 68,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-bermuda-8-room-7-Twin-MountainView",
    name: "Reefside Twin Room",
    description: "This room-filled twin accommodation offers where you can gaze at the towering peaks, blending seaside charm with refined comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 74,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-bermuda-8-room-7-Queen-CityView",
    name: "Grotto Queen Room",
    description: "Enjoy a commodious stay in our Grotto-themed queen room, offering with a backdrop of city parks and green spaces, with a modern en-suite bathroom, and unique touches of offering tranquil and elegant interiors.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 98,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-bermuda-8-room-7-Single-GardenView",
    name: "Standard Single Studio",
    description: "Unwind in this expansive single studio with a view of colorful flower beds, including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 63,
    currency: "BMD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
