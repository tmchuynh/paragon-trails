import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Sunset Villa
export const sunsetVillaRooms: RoomOption[] = [
  {
    id: "hotel-san-juan-3-room-2",
    name: "Classic King Villa",
    description: "Discover the charm of this Classic-themed king villa, complete with indulgent ambiance, stunning with a window to the bustling city below, and featuring premium bath amenities.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Jacuzzi Tub", "Mini Bar", "Bluetooth Speaker", "Kitchenette", "Refrigerator"],
    pricePerNight: 119,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 10,
  },
  {
    id: "hotel-san-juan-3-room-2",
    name: "Standard Twin Suite",
    description: "Standard-themed twin suite with a pleasant outlook, featuring thoughtful design elements and with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Board Games", "Blackout Curtains"],
    pricePerNight: 57,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 6,
  },
  {
    id: "hotel-san-juan-3-room-2",
    name: "Luxury Sofa Bed Apartment",
    description: "Step into a sleek sofa bed apartment that combines Luxury-themed with breathtaking with a window to the bustling city below, complemented by with a modern en-suite bathroom.",
    occupancy: {
      adults: 1,
      children: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Dining Table", "Books", "Refrigerator", "Accessible Room"],
    pricePerNight: 72,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 1,
  }
];
