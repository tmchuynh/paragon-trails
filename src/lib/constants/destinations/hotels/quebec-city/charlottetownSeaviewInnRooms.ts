import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Charlottetown Seaview Inn
export const charlottetownSeaviewInnRooms: RoomOption[] = [
  {
    id: "hotel-quebec-city-10-room-9-Double-CityView",
    name: "Executive Double Loft",
    description: "This relaxing double accommodation offers showcasing the urban landscape, featuring thoughtful design elements.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 149,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-quebec-city-10-room-9-Double-None",
    name: "Signature Double Loft",
    description: "A bohemian double retreat with a pleasant outlook, decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 120,
    currency: "CAD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  },
  {
    id: "hotel-quebec-city-10-room-9-Single-CityView",
    name: "Harmony Single Studio",
    description: "A sleek single retreat with a view of the city's waterfront, featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 111,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-quebec-city-10-room-9-Single-GardenView",
    name: "Deluxe Single Villa",
    description: "Experience our lavish, serene single villa with a view of the garden's tranquil pathways, with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 124,
    currency: "CAD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  }
];
