import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Heritage View
export const heritageViewRooms: RoomOption[] = [
  {
    id: "hotel-auckland-1-room-0",
    name: "Fern Sofa Bed Suite",
    description: "Indulge in the relaxing atmosphere of our sofa bed suite, with spectacular where you can enjoy the tranquility of nature, featuring natural materials and scenic views, and featuring premium bath amenities.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Soundproofing", "Wake-Up Service", "Pet Friendly", "Streaming Services"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 187,
    currency: "NZD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 5,
  },
  {
    id: "hotel-auckland-1-room-0",
    name: "Kiwi King Studio",
    description: "Our Kiwi-themed king studio offers comfy luxury, panoramic where you can watch the city wake up, and with carefully selected furnishings, inspired by with Maori-inspired motifs.",
    occupancy: {
      adults: 2,
      maxGuests: 3,
    },
    bedType: "King",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Smoke Detector", "Dining Table", "Mini Bar", "Accessible Room", "Board Games"],
    pricePerNight: 309,
    currency: "NZD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 5,
  }
];
