import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-cape-town-5-room-4-Double-None",
    name: "Modern Double Studio",
    description: "Relax in our expansive compact double studio featuring with a pleasant outlook, along with offering a unique blend of style and comfort and decorated with local artistic influences.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    amenities: ["Desk", "Free Wi-Fi", "Room Service"],
    accessibilityFeatures: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
    pricePerNight: 1843,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-cape-town-5-room-4-Single-None",
    name: "Modern Single Studio",
    description: "Relax in our relaxing cozy single studio featuring with a pleasant outlook, along with with blackout curtains for a perfect night's sleep and designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries"],
    pricePerNight: 1435,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  },
  {
    id: "hotel-cape-town-5-room-4-SofaBed-CityView",
    name: "Superior Sofa Bed Suite",
    description: "Superior-themed sofa bed suite with a window to the bustling city below, created with both style and function in mind and with a private balcony or terrace.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 1698,
    currency: "ZAR",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-cape-town-5-room-4-Queen-OceanView",
    name: "Signature Queen Room",
    description: "Experience our sizable, elegant queen room featuring uninterrupted ocean vistas, complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    pricePerNight: 2843,
    currency: "ZAR",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  }
];
