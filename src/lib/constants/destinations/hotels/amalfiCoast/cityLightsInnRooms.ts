import { RoomOption } from "@/lib/interfaces/services/rentals";

// Room options for City Lights Inn
export const cityLightsInnRooms: RoomOption[] = [
  {
    id: "hotel-amalfi-coast-7-room-6",
    name: "Signature Single Apartment",
    description: "Our Signature-themed single apartment offers gentle luxury, panoramic with majestic mountain vistas, and with a private balcony or terrace, inspired by designed for ultimate comfort.",
    occupancy: {
      adults: 1,
      children: 0,
      maxGuests: 1,
    },
    bedType: "Single",
    view: "Mountain View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Books", "Pet Friendly", "Seating Area", "Soundproofing", "Dining Table"],
    pricePerNight: 107,
    currency: "USD",
    refundable: false,
    breakfastIncluded: true,
    availableCount: 8,
  },
  {
    id: "hotel-amalfi-coast-7-room-6",
    name: "Standard Sofa Bed Villa",
    description: "Relax in our inviting pleasant sofa bed villa featuring with breathtaking sea views, along with featuring premium bath amenities and created with both style and function in mind.",
    occupancy: {
      adults: 1,
      children: 2,
      maxGuests: 2,
    },
    bedType: "Sofa Bed",
    view: "Ocean View",
    amenities: ["Desk", "Free Wi-Fi", "Room Service", "Hair Dryer", "Toiletries", "Microwave", "Shower", "Heating", "Coffee Maker", "Slippers", "Bathrobe", "Room Service", "Alarm Clock", "Desk Lamp", "Daily Housekeeping", "Non-Smoking Room", "Television", "Air Conditioning", "Seating Area", "Smoke Detector", "Outdoor Furniture", "Soundproofing", "Fireplace"],
    pricePerNight: 122,
    currency: "USD",
    refundable: true,
    breakfastIncluded: false,
    availableCount: 9,
  }
];
