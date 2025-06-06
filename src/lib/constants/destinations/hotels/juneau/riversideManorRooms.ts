import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Riverside Manor
export const riversideManorRooms: RoomOption[] = [
  {
    id: "hotel-juneau-5-room-4",
    name: "Colonial Single Penthouse",
    description: "Colonial-themed penthouse with heartwarming decor, where you can experience the beauty of nature, and featuring a curated minibar selection.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Kitchenette", "Family Room", "Sauna", "In-Room Safe", "Luggage Rack"],
    accessibilityFeatures: ["Visual Aids"],
    pricePerNight: 92,
    currency: "USD",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 9,
  },
  {
    id: "hotel-juneau-5-room-4",
    name: "Manhattan Double Suite",
    description: "This lavish double suite promises where you can unwind in a garden paradise, enriched by Manhattan-themed details and complete with a well-appointed bathroom.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Soundproofing", "Fitness Equipment"],
    pricePerNight: 115,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  },
  {
    id: "hotel-juneau-5-room-4",
    name: "Pioneer Queen Suite",
    description: "Step into a opulent queen suite that combines Pioneer-themed with breathtaking with a view of blooming flowers and greenery, complemented by with carefully selected furnishings.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Queen",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "In-Room Safe", "Accessible Room", "Dining Table", "Blackout Curtains", "Fitness Equipment"],
    pricePerNight: 127,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 4,
  }
];
