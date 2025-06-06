import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Radiant Robin
export const theRadiantRobinRooms: RoomOption[] = [
  {
    id: "hotel-galveston-7-room-6-Queen-GardenView",
    name: "Luxury Queen Apartment",
    description: "Step into a elegant queen apartment that combines Luxury-themed with breathtaking with a view of the garden's peaceful ambiance, complemented by with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping"],
    pricePerNight: 289,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-galveston-7-room-6-SofaBed-GardenView",
    name: "Deluxe Sofa Bed Villa",
    description: "Relax in our room-filled calming sofa bed villa featuring with a view of the garden's natural beauty, along with equipped with all the modern conveniences and offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 211,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-galveston-7-room-6-Queen-None",
    name: "Executive Queen Suite",
    description: "A cozy queen suite designed for contemporary comfort, with with a pleasant outlook and with high-speed internet access, reflecting featuring sleek urban design elements.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 221,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-galveston-7-room-6-King-MountainView",
    name: "Luxury King Room",
    description: "Discover the charm of this Luxury-themed king room, complete with homey ambiance, stunning with a view of the rugged mountain landscape, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 345,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-galveston-7-room-6-Double-None",
    name: "Heritage Double Villa",
    description: "A restful double villa designed for open-concept comfort, with with a pleasant outlook and with a spacious seating area, reflecting highlighting contemporary American style.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 192,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
