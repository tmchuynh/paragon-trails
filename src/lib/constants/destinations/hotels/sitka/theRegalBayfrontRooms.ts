import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Regal Bayfront
export const theRegalBayfrontRooms: RoomOption[] = [
  {
    id: "hotel-sitka-10-room-9-Queen-GardenView",
    name: "Classic Queen Suite",
    description: "Discover the charm of this Classic-themed queen suite, complete with well-proportioned ambiance, stunning where you can relax in a garden haven, and with high-speed internet access.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp"],
    accessibilityFeatures: ["Visual Aids", "Elevator", "Hearing Support"],
    pricePerNight: 130,
    currency: "USD",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 3,
  },
  {
    id: "hotel-sitka-10-room-9-Single-None",
    name: "Heritage Single Villa",
    description: "Experience our calming, sizable single villa with a pleasant outlook, with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer"],
    pricePerNight: 80,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-sitka-10-room-9-SofaBed-MountainView",
    name: "Signature Sofa Bed Suite",
    description: "Step into a opulent sofa bed suite that combines Signature-themed with breathtaking overlooking spectacular mountain ranges, complemented by featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers"],
    pricePerNight: 123,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 5,
  },
  {
    id: "hotel-sitka-10-room-9-SofaBed-None",
    name: "Standard Sofa Bed Loft",
    description: "Experience our industrial, glamorous sofa bed loft with a pleasant outlook, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower"],
    pricePerNight: 98,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
