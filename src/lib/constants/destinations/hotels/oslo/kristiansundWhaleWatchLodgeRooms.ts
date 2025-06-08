import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Kristiansund Whale Watch Lodge
export const kristiansundWhaleWatchLodgeRooms: RoomOption[] = [
  {
    id: "hotel-oslo-2-room-1-King-GardenView",
    name: "Classic King Studio",
    description: "Relax in our artistic grandiose king studio featuring where you can relax in a garden haven, along with with blackout curtains for a perfect night's sleep and featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 32823,
    currency: "NOK",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-oslo-2-room-1-Twin-CityView",
    name: "Deluxe Twin Apartment",
    description: "Relax in our inviting sleek twin apartment featuring featuring a blend of modern and historic architecture, along with with plush bedding for ultimate comfort and created with both style and function in mind.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 19674,
    currency: "NOK",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-oslo-2-room-1-Single-None",
    name: "Signature Single Studio",
    description: "A sleek single retreat with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 19015,
    currency: "NOK",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-oslo-2-room-1-Queen-OceanView",
    name: "Serenity Queen Apartment",
    description: "Indulge in the wide-ranging atmosphere of our queen apartment, with spectacular with a view of the endless blue, designed for ultimate comfort, and with a spacious seating area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 34398,
    currency: "NOK",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
