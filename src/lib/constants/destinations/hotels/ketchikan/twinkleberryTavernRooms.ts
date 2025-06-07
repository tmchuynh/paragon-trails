import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Twinkleberry Tavern
export const twinkleberryTavernRooms: RoomOption[] = [
  {
    id: "hotel-ketchikan-3-room-2-King-CityView",
    name: "Deluxe King Loft",
    description: "Relax in our well-proportioned grandiose king loft featuring with a view of iconic landmarks, along with including climate control for your comfort and offering a classic yet modern American experience.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe"],
    pricePerNight: 168,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-ketchikan-3-room-2-SofaBed-OceanView",
    name: "Classic Sofa Bed Penthouse",
    description: "Experience our vintage, minimalist sofa bed penthouse where you can enjoy the ocean's beauty, featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 119,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-ketchikan-3-room-2-Double-None",
    name: "Executive Double Room",
    description: "Discover the charm of this Executive-themed double room, complete with large-scale ambiance, stunning with a pleasant outlook, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 96,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-ketchikan-3-room-2-Twin-OceanView",
    name: "Heritage Twin Studio",
    description: "This exquisite twin studio promises with a view of the ocean's changing tides, enriched by Heritage-themed details and offering a unique blend of style and comfort.",
    occupancy: {
      adults: 2,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 111,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
