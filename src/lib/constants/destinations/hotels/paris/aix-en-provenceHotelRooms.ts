import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Aix-en-Provence Hotel
export const aixenprovenceHotelRooms: RoomOption[] = [
  {
    id: "hotel-paris-10-room-9-SofaBed-MountainView",
    name: "Tranquility Sofa Bed Apartment",
    description: "This industrial sofa bed apartment promises where you can find inspiration in the mountains, enriched by Tranquility-themed details and including climate control for your comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 87,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-paris-10-room-9-Double-None",
    name: "Serenity Double Penthouse",
    description: "This tranquil double accommodation offers with a pleasant outlook, where elegance meets Parisian style.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 89,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-paris-10-room-9-King-GardenView",
    name: "Horizon King Apartment",
    description: "Unwind in this compact king apartment offering a peaceful garden outlook, offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 127,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-paris-10-room-9-Queen-CityView",
    name: "Horizon Queen Suite",
    description: "Step into a sumptuous queen suite that combines Horizon-themed with breathtaking with a backdrop of city parks and green spaces, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 104,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
