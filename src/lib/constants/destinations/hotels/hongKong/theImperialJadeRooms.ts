import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for The Imperial Jade
export const theImperialJadeRooms: RoomOption[] = [
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Modern Twin Studio",
    description: "Enjoy a bohemian stay in our Modern-themed twin studio, offering with a view of the city's cultural landmarks, with carefully selected furnishings, and unique touches of designed for ultimate comfort.",
    occupancy: {
      adults: 2,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Twin",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Streaming Services", "Flat-Screen TV", "Refrigerator"],
    pricePerNight: 188,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 8,
  },
  {
    id: "hotel-hong-kong-6-room-5",
    name: "Modern Sofa Bed Apartment",
    description: "Our Modern-themed sofa bed apartment offers comfortable luxury, panoramic where you can enjoy the city's energy, and offering a unique blend of style and comfort, inspired by decorated with local artistic influences.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Mini Bar", "Bathtub", "Blackout Curtains", "Streaming Services"],
    accessibilityFeatures: ["Accessible Bathroom", "Visual Aids"],
    pricePerNight: 201,
    currency: "CNY",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 7,
  }
];
