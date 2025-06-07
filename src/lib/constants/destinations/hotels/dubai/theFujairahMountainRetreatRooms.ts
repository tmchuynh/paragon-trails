import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Fujairah Mountain Retreat
export const theFujairahMountainRetreatRooms: RoomOption[] = [
  {
    id: "hotel-dubai-2-room-1-Double-OceanView",
    name: "Premium Double Room",
    description: "This open-concept double accommodation offers overlooking the sparkling ocean waves, blending traditional motifs with futuristic luxury.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 2481,
    currency: "AED",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  },
  {
    id: "hotel-dubai-2-room-1-Double-GardenView",
    name: "Desert Double Villa",
    description: "Indulge in the tranquil atmosphere of our double villa, with spectacular where you can find solace in nature's embrace, featuring opulent Arabian-inspired decor, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 2383,
    currency: "AED",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-dubai-2-room-1-Double-None",
    name: "Classic Double Suite",
    description: "Classic-themed suite with calming decor, with a pleasant outlook, and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 1819,
    currency: "AED",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-dubai-2-room-1-Twin-CityView",
    name: "Deluxe Twin Loft",
    description: "Step into a refreshing twin loft that combines Deluxe-themed with breathtaking featuring a blend of modern and historic architecture, complemented by with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 1691,
    currency: "AED",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  }
];
