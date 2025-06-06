import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Casa di Mare
export const casaDiMareRooms: RoomOption[] = [
  {
    id: "hotel-malta-2-room-1-SofaBed-OceanView",
    name: "Classic Sofa Bed Apartment",
    description: "A deluxe sofa bed apartment designed for tasteful comfort, with with a private balcony overlooking the sea and featuring premium bath amenities, reflecting with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 217,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-malta-2-room-1-King-OceanView",
    name: "Mdina King Suite",
    description: "Our Mdina-themed king suite offers large-scale luxury, panoramic with the sound of the ocean as your backdrop, and complete with a well-appointed bathroom, inspired by offering a unique island experience with a touch of luxury.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 321,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-malta-2-room-1-Twin-OceanView",
    name: "Gozo Twin Room",
    description: "Enjoy a modern stay in our Gozo-themed twin room, offering with a panoramic view of the coastline, featuring a curated minibar selection, and unique touches of blending traditional Maltese style with contemporary design.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 204,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-malta-2-room-1-King-MountainView",
    name: "Standard King Room",
    description: "Discover the charm of this Standard-themed king room, complete with intimate ambiance, stunning overlooking spectacular mountain ranges, and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 347,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-malta-2-room-1-Twin-GardenView",
    name: "Maltese Lace Twin Apartment",
    description: "Relax in our comfortable indulgent twin apartment featuring featuring a peaceful garden setting, along with including climate control for your comfort and with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 189,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-malta-2-room-1-Queen-None",
    name: "Executive Queen Loft",
    description: "A comfy queen loft designed for majestic comfort, with with a pleasant outlook and with plush bedding for ultimate comfort, reflecting with a blend of historic charm and modern amenities.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Queen",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 217,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-malta-2-room-1-Queen-GardenView",
    name: "Gozo Queen Loft",
    description: "This generous queen loft promises with a view of the garden's lush greenery, enriched by Gozo-themed details and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 273,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
