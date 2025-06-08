import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Amber Fort Residency
export const amberFortResidencyRooms: RoomOption[] = [
  {
    id: "hotel-fort-kochi-10-room-9-SofaBed-MountainView",
    name: "Premium Sofa Bed Loft",
    description: "Step into a stretching sofa bed loft that combines Premium-themed with breathtaking with a view of the mountains' natural beauty, complemented by equipped with all the modern conveniences.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 8993,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-fort-kochi-10-room-9-SofaBed-OceanView",
    name: "Superior Sofa Bed Room",
    description: "Discover the charm of this Superior-themed sofa bed room, complete with elegant ambiance, stunning where you can enjoy stunning sunsets over the water, and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker"],
    pricePerNight: 9448,
    currency: "INR",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 6,
  },
  {
    id: "hotel-fort-kochi-10-room-9-Twin-OceanView",
    name: "Executive Twin Studio",
    description: "Discover the charm of this Executive-themed twin studio, complete with expansive ambiance, stunning where you can enjoy stunning sunsets over the water, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating"],
    pricePerNight: 8927,
    currency: "INR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-fort-kochi-10-room-9-Double-CityView",
    name: "Harmony Double Villa",
    description: "Our soft Harmony-themed villa offers with a view of the city's waterfront, sumptuous comfort, and equipped with all the modern conveniences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 9548,
    currency: "INR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 10,
  }
];
