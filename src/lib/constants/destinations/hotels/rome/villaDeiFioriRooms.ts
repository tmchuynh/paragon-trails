import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Villa dei Fiori
export const villaDeiFioriRooms: RoomOption[] = [
  {
    id: "hotel-rome-11-room-10-Single-CityView",
    name: "Signature Single Suite",
    description: "Our eclectic Signature-themed suite offers overlooking the vibrant cityscape, chic comfort, and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 80,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-rome-11-room-10-Queen-GardenView",
    name: "Horizon Queen Penthouse",
    description: "Experience our spacious, wide-ranging queen penthouse with a view of the garden's natural beauty, including climate control for your comfort.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 117,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-rome-11-room-10-Queen-OceanView",
    name: "Luxury Queen Room",
    description: "Step into a modern queen room that combines Luxury-themed with breathtaking where the horizon meets the ocean, complemented by including climate control for your comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 125,
    currency: "EUR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-rome-11-room-10-Single-OceanView",
    name: "Horizon Single Studio",
    description: "This spacious single studio promises with a private balcony overlooking the sea, enriched by Horizon-themed details and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 83,
    currency: "EUR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
