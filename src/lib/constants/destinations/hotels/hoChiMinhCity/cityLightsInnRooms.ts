import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-3-room-2",
    name: "Modern Twin Penthouse",
    description: "Indulge in the inviting atmosphere of our twin penthouse, with spectacular with a view of the endless blue, featuring thoughtful design elements, and featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Accessible Room", "Flat-Screen TV"],
    pricePerNight: 146,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-ho-chi-minh-city-3-room-2",
    name: "Standard Single Loft",
    description: "Step into a ornate single loft that combines Standard-themed with breathtaking with a view of the mountains' rugged terrain, complemented by with a spacious work area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Pet Friendly", "Outdoor Furniture", "Flat-Screen TV", "Accessible Room"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 124,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 2,
  },
  {
    id: "hotel-ho-chi-minh-city-3-room-2",
    name: "Premium Single Suite",
    description: "Unwind in this indulgent single suite where you can escape to a green sanctuary, with blackout curtains for a perfect night's sleep.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Mini Bar", "Kitchenette", "Fireplace", "Bluetooth Speaker", "Family Room"],
    pricePerNight: 108,
    currency: "VND",
    refundable: false,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
