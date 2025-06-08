import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Tarapoto Rainforest Lodge
export const tarapotoRainforestLodgeRooms: RoomOption[] = [
  {
    id: "hotel-lima-10-room-9-SofaBed-None",
    name: "Andes Sofa Bed Suite",
    description: "Andes-themed sofa bed suite with a pleasant outlook, featuring Andean-inspired patterns and textures and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 2850,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-lima-10-room-9-SofaBed-CityView",
    name: "Machu Picchu Sofa Bed Penthouse",
    description: "Enjoy a bohemian stay in our Machu Picchu-themed sofa bed penthouse, offering with a front-row seat to the city's heartbeat, with high-speed internet access, and unique touches of highlighting the natural beauty of the region.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 3466,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-lima-10-room-9-Queen-None",
    name: "Standard Queen Room",
    description: "This intimate queen room promises with a pleasant outlook, enriched by Standard-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 4245,
    currency: "PEN",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-lima-10-room-9-Queen-OceanView",
    name: "Amazonia Queen Loft",
    description: "Relax in our stylish intimate queen loft featuring where you can feel the ocean breeze, along with featuring premium bath amenities and featuring Andean-inspired patterns and textures.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 5943,
    currency: "PEN",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
