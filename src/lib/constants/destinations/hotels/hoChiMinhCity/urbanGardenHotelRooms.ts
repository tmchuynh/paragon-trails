import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for Urban Garden Hotel
export const urbanGardenHotelRooms: RoomOption[] = [
  {
    id: "hotel-ho-chi-minh-city-5-room-4",
    name: "Classic Sofa Bed Villa",
    description: "Our Classic-themed sofa bed villa offers wide-ranging luxury, panoramic where the city skyline meets the horizon, and with a spacious seating area, inspired by created with both style and function in mind.",
    occupancy: {
      adults: 1,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "City View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Family Room", "Sauna", "In-Room Safe", "Seating Area", "Balcony", "Kitchenette"],
    accessibilityFeatures: ["Wheelchair Accessible"],
    pricePerNight: 178,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  },
  {
    id: "hotel-ho-chi-minh-city-5-room-4",
    name: "Executive Sofa Bed Villa",
    description: "A peaceful sofa bed villa designed for soothing comfort, with with a view of colorful flower beds and offering a unique blend of style and comfort, reflecting created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Garden View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Smoke Detector", "Bathtub", "Sauna"],
    pricePerNight: 210,
    currency: "VND",
    refundable: true,
    breakfastIncluded: true,
    availableCount: 2,
  }
];
