import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Prestige Hotel
export const thePrestigeHotelRooms: RoomOption[] = [
  {
    id: "hotel-bermuda-6-room-5",
    name: "Nautical Sofa Bed Villa",
    description: "Our Nautical-themed sofa bed villa offers serene luxury, panoramic with a view of the city's waterfront, and with high-speed internet access, inspired by offering tranquil and elegant interiors.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Dining Table", "Ironing Facilities", "Refrigerator", "Pet Friendly"],
    pricePerNight: 117,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-bermuda-6-room-5",
    name: "Executive King Room",
    description: "Step into a generous king room that combines Executive-themed with breathtaking where you can relax in a garden haven, complemented by with plush bedding for ultimate comfort.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Bathtub", "Family Room", "Fitness Equipment", "Mini Bar", "Refrigerator", "Streaming Services"],
    accessibilityFeatures: ["Accessible Bathroom", "Hearing Support"],
    pricePerNight: 182,
    currency: "BMD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  }
];
