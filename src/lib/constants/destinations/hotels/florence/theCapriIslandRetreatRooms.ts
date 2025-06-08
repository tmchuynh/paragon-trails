import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Capri Island Retreat
export const theCapriIslandRetreatRooms: RoomOption[] = [
  {
    id: "hotel-florence-4-room-3-King-GardenView",
    name: "Superior King Loft",
    description: "Indulge in the room-filled atmosphere of our king loft, with spectacular where nature is just outside your window, featuring tasteful Mediterranean touches, and with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service"],
    pricePerNight: 146,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-florence-4-room-3-Double-CityView",
    name: "Deluxe Double Villa",
    description: "Relax in our inviting broad double villa featuring featuring a blend of modern and historic architecture, along with with high-speed internet access and with classic Italian elegance.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 94,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-florence-4-room-3-Double-MountainView",
    name: "Superior Double Penthouse",
    description: "Unwind in this indulgent double penthouse where you can enjoy the serenity of mountain life, with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 117,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-florence-4-room-3-Single-CityView",
    name: "Horizon Single Room",
    description: "Step into a fashionable single room that combines Horizon-themed with breathtaking where the city skyline meets the horizon, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
