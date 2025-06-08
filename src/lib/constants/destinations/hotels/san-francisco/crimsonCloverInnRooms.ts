import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Crimson Clover Inn
export const crimsonCloverInnRooms: RoomOption[] = [
  {
    id: "hotel-san-francisco-9-room-8-SofaBed-OceanView",
    name: "Classic Sofa Bed Loft",
    description: "Classic-themed sofa bed loft where you can watch the waves roll in, designed for ultimate comfort and with high-speed internet access.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    pricePerNight: 276,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-san-francisco-9-room-8-SofaBed-MountainView",
    name: "Signature Sofa Bed Villa",
    description: "Enjoy a large-scale stay in our Signature-themed sofa bed villa, offering where you can enjoy the tranquility of the mountains, offering a unique blend of style and comfort, and unique touches of featuring thoughtful design elements.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave"],
    pricePerNight: 245,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-san-francisco-9-room-8-Queen-OceanView",
    name: "Classic Queen Studio",
    description: "Discover the charm of this Classic-themed queen studio, complete with airy ambiance, stunning with a view of the ocean's horizon, and with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 354,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  },
  {
    id: "hotel-san-francisco-9-room-8-Double-CityView",
    name: "Serenity Double Penthouse",
    description: "Indulge in the elegant atmosphere of our double penthouse, with spectacular where you can enjoy the city's energy, created with both style and function in mind, and with a spacious work area.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 248,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  }
];
