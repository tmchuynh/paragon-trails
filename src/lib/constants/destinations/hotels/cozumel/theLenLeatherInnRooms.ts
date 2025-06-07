import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The León Leather Inn
export const theLenLeatherInnRooms: RoomOption[] = [
  {
    id: "hotel-cozumel-6-room-5-Single-CityView",
    name: "Mayan Single Studio",
    description: "A open-concept single studio designed for prestigious comfort, with where the city skyline meets the horizon and with plush bedding for ultimate comfort, reflecting featuring bright colors and handcrafted decor.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 53890,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-cozumel-6-room-5-Double-OceanView",
    name: "Executive Double Apartment",
    description: "Our Executive-themed double apartment offers sleek luxury, panoramic where the horizon meets the ocean, and including climate control for your comfort, inspired by featuring bright colors and handcrafted decor.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 78998,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-cozumel-6-room-5-Twin-CityView",
    name: "Luxury Twin Room",
    description: "Luxury-themed twin room overlooking the vibrant cityscape, offering a festive and welcoming environment and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 60129,
    currency: "MXN",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-cozumel-6-room-5-King-None",
    name: "Deluxe King Apartment",
    description: "Enjoy a extravagant stay in our Deluxe-themed king apartment, offering with a pleasant outlook, equipped with all the modern conveniences, and unique touches of featuring bright colors and handcrafted decor.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids", "Elevator"],
    pricePerNight: 77416,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
