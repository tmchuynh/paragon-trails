import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Rustic Lodge
export const theRusticLodgeRooms: RoomOption[] = [
  {
    id: "hotel-maui-8-room-7-Single-GardenView",
    name: "Classic Single Studio",
    description: "Enjoy a bohemian stay in our Classic-themed single studio, offering where you can enjoy the sights and sounds of nature, with a spacious work area, and unique touches of offering a classic yet modern American experience.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 155,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-maui-8-room-7-Twin-GardenView",
    name: "Colonial Twin Studio",
    description: "Indulge in the futuristic atmosphere of our twin studio, with spectacular with a view of the garden's vibrant colors, featuring sleek urban design elements, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 173,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-maui-8-room-7-Double-None",
    name: "Heritage Double Apartment",
    description: "Experience our sizable, wide-ranging double apartment with a pleasant outlook, equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 160,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-maui-8-room-7-Queen-OceanView",
    name: "Colonial Queen Studio",
    description: "Colonial-themed queen studio where you can watch the waves roll in, with rustic and modern influences and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Elevator"],
    pricePerNight: 237,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  }
];
