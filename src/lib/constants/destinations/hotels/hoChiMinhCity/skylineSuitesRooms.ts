import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Skyline Suites
export const skylineSuitesRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-4-room-3",
    name: "Modern Single Room",
    description: "Step into a inviting single room that combines Modern-themed with breathtaking with a view of the mountains' natural beauty, complemented by with a spacious seating area.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Complimentary Bottled Water", "Wake-Up Service", "Pet Friendly"],
    accessibilityFeatures: ["Elevator", "Visual Aids"],
    pricePerNight: 74,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 4,
  },
  {
    id: "hotel-ho-chi-minh-city-4-room-3",
    name: "Executive Single Studio",
    description: "Experience our avant-garde, modern single studio where the horizon meets the ocean, with a luxurious soaking tub.",
    occupancy: {
      adults: 1,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Outdoor Furniture", "Jacuzzi Tub", "Kitchenette"],
    pricePerNight: 77,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 3,
  },
  {
    id: "hotel-ho-chi-minh-city-4-room-3",
    name: "Horizon Double Suite",
    description: "Unwind in this sophisticated double suite with a view of the garden's tranquil pathways, featuring a curated minibar selection.",
    occupancy: {
      adults: 2,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Double",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Refrigerator", "Bathtub"],
    pricePerNight: 95,
    currency: "VND",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 1,
  }
];
