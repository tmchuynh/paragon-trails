import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Pine Valley Retreat
export const pineValleyRetreatRooms: RoomOption[] = [
  {
    id: "hotel-washington-8-room-7-SofaBed-None",
    name: "Deluxe Sofa Bed Room",
    description: "Relax in our classic regal sofa bed room featuring with a pleasant outlook, along with with a private balcony or terrace and highlighting contemporary American style.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 61,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-washington-8-room-7-Twin-GardenView",
    name: "Luxury Twin Studio",
    description: "Experience our wide-ranging, airy twin studio where you can take in the fresh air, with a spacious seating area.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 68,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-washington-8-room-7-King-OceanView",
    name: "Executive King Apartment",
    description: "Unwind in this chic king apartment featuring uninterrupted ocean vistas, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 138,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-washington-8-room-7-Single-GardenView",
    name: "Golden Gate Single Room",
    description: "This serene single room promises with a view of colorful flower beds, enriched by Golden Gate-themed details and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 64,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
