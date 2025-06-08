import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Querétaro Heritage Inn
export const theQuertaroHeritageInnRooms: RoomOption[] = [
  {
    id: "hotel-puerto-escondido-9-room-8-King-MountainView",
    name: "Classic King Villa",
    description: "Step into a luxurious king villa that combines Classic-themed with breathtaking with a view of the mountains' breathtaking sunsets, complemented by featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 5518,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-puerto-escondido-9-room-8-SofaBed-CityView",
    name: "Modern Sofa Bed Penthouse",
    description: "A refined sofa bed penthouse designed for modern comfort, with with a view of the city's cultural landmarks and featuring premium bath amenities, reflecting decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 3541,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-puerto-escondido-9-room-8-Queen-GardenView",
    name: "Superior Queen Room",
    description: "This modern queen room promises where you can unwind in a garden paradise, enriched by Superior-themed details and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 4764,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 7,
  },
  {
    id: "hotel-puerto-escondido-9-room-8-King-CityView",
    name: "Luxury King Penthouse",
    description: "Step into a upscale king penthouse that combines Luxury-themed with breathtaking with a view of iconic landmarks, complemented by with a private balcony or terrace.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock"],
    pricePerNight: 5612,
    currency: "MXN",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  }
];
