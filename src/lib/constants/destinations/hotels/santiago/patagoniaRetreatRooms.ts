import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Patagonia Retreat
export const patagoniaRetreatRooms: RoomOption[] = [
  {
    id: "hotel-santiago-2-room-1-Double-GardenView",
    name: "Lakes Double Loft",
    description: "Relax in our airy peaceful double loft featuring where you can enjoy the serenity of a garden retreat, along with with plush bedding for ultimate comfort and highlighting the beauty of Chilean landscapes.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    accessibilityFeatures: ["Wheelchair Accessible", "Accessible Bathroom"],
    pricePerNight: 143283883,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-santiago-2-room-1-Queen-OceanView",
    name: "Luxury Queen Loft",
    description: "Relax in our lavish elegant queen loft featuring where you can watch the waves roll in, along with featuring premium bath amenities and featuring minimalist and natural decor.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 213027121,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-santiago-2-room-1-Queen-CityView",
    name: "Classic Queen Villa",
    description: "Our Classic-themed queen villa offers extravagant luxury, panoramic with stunning views of the city skyline, and with carefully selected furnishings, inspired by featuring minimalist and natural decor.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 151835419,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-santiago-2-room-1-Double-MountainView",
    name: "Patagonia Double Studio",
    description: "A snug double retreat where you can enjoy the peace of the highlands, blending Andean and coastal influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 156260927,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-santiago-2-room-1-Single-OceanView",
    name: "Atacama Single Villa",
    description: "A indulgent single villa designed for rustic comfort, with with a view of the tranquil sea and equipped with all the modern conveniences, reflecting featuring minimalist and natural decor.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 137869633,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-santiago-2-room-1-SofaBed-OceanView",
    name: "Standard Sofa Bed Apartment",
    description: "Indulge in the glamorous atmosphere of our sofa bed apartment, with spectacular where the ocean meets the sky, offering serene and refined interiors, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 137363191,
    currency: "CLP",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-santiago-2-room-1-Twin-CityView",
    name: "Andes Twin Penthouse",
    description: "Our eclectic Andes-themed penthouse offers where city lights twinkle at night, sleek comfort, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 130156832,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-santiago-2-room-1-Queen-MountainView",
    name: "Atacama Queen Room",
    description: "Step into a homey queen room that combines Atacama-themed with breathtaking with a view of the rugged mountain landscape, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    accessibilityFeatures: ["Accessible Bathroom", "Elevator"],
    pricePerNight: 185875958,
    currency: "CLP",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  }
];
