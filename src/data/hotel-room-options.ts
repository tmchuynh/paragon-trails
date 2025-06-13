import { HotelRoom } from "@/lib/interfaces/services/hotels";

// Standard room configurations for different hotel types
export const standardRoomOptions: HotelRoom[] = [
  {
    id: "standard-single",
    name: "Standard Single Room",
    type: "standard",
    size: { area: 20, unit: "m²" },
    capacity: {
      adults: 1,
      children: 0,
      beds: [{ type: "Single", count: 1 }]
    },
    amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "TV", "Room Service"],
    pricing: { baseRate: 80, currency: "USD" },
    availability: true,
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"],
    description: "Comfortable single room perfect for solo travelers",
    features: ["City view", "Work desk", "Mini fridge"]
  },
  {
    id: "standard-double",
    name: "Standard Double Room",
    type: "standard",
    size: { area: 25, unit: "m²" },
    capacity: {
      adults: 2,
      children: 1,
      beds: [{ type: "Double", count: 1 }]
    },
    amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "TV", "Room Service", "Mini Bar"],
    pricing: { baseRate: 120, currency: "USD" },
    availability: true,
    images: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"],
    description: "Spacious double room ideal for couples",
    features: ["City view", "Work desk", "Mini fridge", "Balcony"]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    type: "deluxe",
    size: { area: 35, unit: "m²" },
    capacity: {
      adults: 2,
      children: 2,
      beds: [{ type: "King", count: 1 }]
    },
    amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "Smart TV", "Room Service", "Mini Bar", "Coffee Machine"],
    pricing: { baseRate: 180, currency: "USD" },
    availability: true,
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop"],
    description: "Luxurious deluxe room with premium amenities",
    features: ["Ocean view", "Sitting area", "Premium linens", "Marble bathroom"]
  },
  {
    id: "family-suite",
    name: "Family Suite",
    type: "family",
    size: { area: 50, unit: "m²" },
    capacity: {
      adults: 4,
      children: 3,
      beds: [{ type: "King", count: 1 }, { type: "Twin", count: 2 }]
    },
    amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "Smart TV", "Room Service", "Mini Bar", "Coffee Machine", "Kitchenette"],
    pricing: { baseRate: 280, currency: "USD" },
    availability: true,
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"],
    description: "Spacious family suite perfect for larger groups",
    features: ["Separate living area", "Kitchenette", "Multiple bathrooms", "Kids amenities"]
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "executive",
    size: { area: 65, unit: "m²" },
    capacity: {
      adults: 2,
      children: 2,
      beds: [{ type: "King", count: 1 }]
    },
    amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "Smart TV", "24/7 Room Service", "Premium Mini Bar", "Espresso Machine", "Concierge Service"],
    pricing: { baseRate: 380, currency: "USD" },
    availability: true,
    images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop"],
    description: "Premium executive suite with business amenities",
    features: ["Panoramic view", "Separate office area", "Premium bathroom", "Express check-in/out"]
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    type: "presidential",
    size: { area: 120, unit: "m²" },
    capacity: {
      adults: 4,
      children: 2,
      beds: [{ type: "King", count: 2 }]
    },
    amenities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom", "Smart TV", "Butler Service", "Premium Mini Bar", "Espresso Machine", "Private Dining"],
    pricing: { baseRate: 800, currency: "USD" },
    availability: true,
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"],
    description: "Ultimate luxury presidential suite experience",
    features: ["Private terrace", "Multiple bedrooms", "Full kitchen", "Personal butler"]
  }
];

// Helper function to get rooms for specific hotel types
export const getRoomsForHotelType = (hotelType: string): HotelRoom[] => {
  switch (hotelType) {
    case "hostel":
      return [standardRoomOptions[0]]; // Just standard single
    case "boutique":
      return standardRoomOptions.slice(0, 3); // Standard + deluxe
    case "hotel":
      return standardRoomOptions.slice(0, 4); // Up to family suite
    case "resort":
    case "villa":
      return standardRoomOptions; // All room types
    case "bed-and-breakfast":
      return standardRoomOptions.slice(0, 2); // Standard rooms only
    case "apartment":
      return [standardRoomOptions[3]]; // Family suite equivalent
    default:
      return standardRoomOptions.slice(0, 3);
  }
};