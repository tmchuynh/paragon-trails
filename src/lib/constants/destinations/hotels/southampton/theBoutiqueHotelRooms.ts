import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Boutique Hotel
export const theBoutiqueHotelRooms: RoomOption[] = [
  {
    id: "hotel-southampton-9-room-8-Twin-OceanView",
    name: "Deluxe Twin Penthouse",
    description: "Discover the charm of this Deluxe-themed twin penthouse, complete with lavish ambiance, stunning where the horizon meets the ocean, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 220,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-southampton-9-room-8-King-GardenView",
    name: "Standard King Suite",
    description: "Relax in our open-concept bohemian king suite featuring with serene garden views, along with with a modern en-suite bathroom and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 352,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-southampton-9-room-8-SofaBed-MountainView",
    name: "Executive Sofa Bed Room",
    description: "Our Executive-themed sofa bed room offers compact luxury, panoramic where you can enjoy the mountains' majestic presence, and complete with a well-appointed bathroom, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 247,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-southampton-9-room-8-Twin-None",
    name: "Classic Twin Room",
    description: "This exquisite twin room promises with a pleasant outlook, enriched by Classic-themed details and with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 191,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
