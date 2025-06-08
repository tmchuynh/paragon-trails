import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Phuket Paradise Resort
export const phuketParadiseResortRooms: RoomOption[] = [
  {
    id: "hotel-bangkok-8-room-7-Double-GardenView",
    name: "Premium Double Apartment",
    description: "Relax in our relaxing palatial double apartment featuring with a view of the garden's tranquil pathways, along with featuring a curated minibar selection and adorned with Thai-inspired decor.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 160738,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-bangkok-8-room-7-Twin-OceanView",
    name: "Deluxe Twin Apartment",
    description: "Relax in our homey sophisticated twin apartment featuring with a view of the endless blue, along with with high-speed internet access and with subtle nods to Thailand's rich cultural heritage.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 163639,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-bangkok-8-room-7-Queen-OceanView",
    name: "Superior Queen Suite",
    description: "Step into a inviting queen suite that combines Superior-themed with breathtaking where you can relax to the sound of the waves, complemented by complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 206307,
    currency: "THB",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-bangkok-8-room-7-Single-None",
    name: "Siam Single Apartment",
    description: "This opulent single accommodation offers with a pleasant outlook, adorned with Thai-inspired decor.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 118382,
    currency: "THB",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  }
];
