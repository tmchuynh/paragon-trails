import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Villa d’Oro
export const villaDoroRooms: RoomOption[] = [
  {
    id: "hotel-milan-8-room-7-King-None",
    name: "Horizon King Penthouse",
    description: "Discover the charm of this Horizon-themed king penthouse, complete with sizable ambiance, stunning with a pleasant outlook, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 238,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-milan-8-room-7-SofaBed-MountainView",
    name: "Luxury Sofa Bed Suite",
    description: "Experience our peaceful, eclectic sofa bed suite with a view of the mountains' serene beauty, equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 202,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-milan-8-room-7-Queen-OceanView",
    name: "Serenity Queen Penthouse",
    description: "Serenity-themed penthouse with sumptuous decor, with a panoramic view of the coastline, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 250,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-milan-8-room-7-Double-MountainView",
    name: "Modern Double Penthouse",
    description: "Modern-themed penthouse with deluxe decor, with a view of the mountains' breathtaking sunsets, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 231,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
