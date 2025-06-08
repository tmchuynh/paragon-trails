import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Puerto Cortés Harbor Inn
export const puertoCortsHarborInnRooms: RoomOption[] = [
  {
    id: "hotel-roatan-3-room-2-King-GardenView",
    name: "Bay Island King Studio",
    description: "Experience our fashionable, artistic king studio with a view of the garden's seasonal changes, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 91376,
    currency: "HNL",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-roatan-3-room-2-SofaBed-GardenView",
    name: "Luxury Sofa Bed Studio",
    description: "A modern sofa bed retreat with a view of colorful flower beds, with natural and rustic themes.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 62226,
    currency: "HNL",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-roatan-3-room-2-Twin-None",
    name: "Tropical Coast Twin Villa",
    description: "This restful twin villa promises with a pleasant outlook, enriched by Tropical Coast-themed details and including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 59191,
    currency: "HNL",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 10,
  },
  {
    id: "hotel-roatan-3-room-2-King-OceanView",
    name: "Copán King Apartment",
    description: "This opulent king apartment promises with a view of the ocean's changing tides, enriched by Copán-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator"],
    pricePerNight: 116867,
    currency: "HNL",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
