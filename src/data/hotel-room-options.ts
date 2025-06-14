import { HotelRoom } from "@/lib/interfaces/services/hotels";

// Standard room configurations for different hotel types
export const standardRoomOptions: HotelRoom[] = [
  {
    id: "standard-single",
    name: "Standard Single Room",
    type: "standard",
    size: { area: 20, unit: "m²" },
    capacity: {
      maxOccupancy: 2,
      beds: [{ type: "Double", count: 1 }],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "TV",
      "Room Service",
    ],
    pricing: { baseRate: 80, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2276.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Comfortable single room perfect for solo travelers",
    features: ["City view", "Work desk", "Mini fridge"],
  },
  {
    id: "standard-double",
    name: "Standard Double Room",
    type: "standard",
    size: { area: 25, unit: "m²" },
    capacity: {
      maxOccupancy: 2,
      beds: [{ type: "Queen", count: 1 }],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "TV",
      "Room Service",
      "Mini Bar",
    ],
    pricing: { baseRate: 120, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2214.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Spacious double room ideal for couples",
    features: ["City view", "Work desk", "Mini fridge", "Balcony"],
  },
  {
    id: "queen-room",
    name: "Queen Room",
    type: "deluxe",
    size: { area: 30, unit: "m²" },
    capacity: {
      maxOccupancy: 2,
      beds: [{ type: "Queen", count: 1 }],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "Room Service",
      "Mini Bar",
      "Coffee Machine",
    ],
    pricing: { baseRate: 165, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-hotel-with-tv-cabinet-wardrobe_105762-2292.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Elegant queen room with modern amenities",
    features: ["City view", "Sitting area", "Premium linens", "Rain shower"],
  },
  {
    id: "king-room",
    name: "King Room",
    type: "deluxe",
    size: { area: 35, unit: "m²" },
    capacity: {
      maxOccupancy: 2,
      beds: [{ type: "King", count: 1 }],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "Room Service",
      "Mini Bar",
      "Coffee Machine",
    ],
    pricing: { baseRate: 180, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/premium-photo/modern-minimalist-bedroom-design_1310085-55797.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Luxurious deluxe room with premium amenities",
    features: [
      "Ocean view",
      "Sitting area",
      "Premium linens",
      "Marble bathroom",
    ],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    type: "family",
    size: { area: 50, unit: "m²" },
    capacity: {
      maxOccupancy: 6,
      beds: [
        { type: "King", count: 2 },
        { type: "Twin", count: 2 },
      ],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "Room Service",
      "Mini Bar",
      "Coffee Machine",
      "Kitchenette",
    ],
    pricing: { baseRate: 400, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Spacious family suite perfect for larger groups",
    features: [
      "Separate living area",
      "Kitchenette",
      "Multiple bathrooms",
      "Kids amenities",
    ],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "executive",
    size: { area: 65, unit: "m²" },
    capacity: {
      maxOccupancy: 2,
      beds: [{ type: "King", count: 1 }],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "24/7 Room Service",
      "Premium Mini Bar",
      "Espresso Machine",
      "Concierge Service",
    ],
    pricing: { baseRate: 380, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/premium-photo/luxury-bedroom-with-cozy-bedding-elegant-furniture-calm-relaxing-ambiance-ultimate-comfort-style_875722-59106.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Premium executive suite with business amenities",
    features: [
      "Panoramic view",
      "Separate office area",
      "Premium bathroom",
      "Express check-in/out",
    ],
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    type: "presidential",
    size: { area: 120, unit: "m²" },
    capacity: {
      maxOccupancy: 4,
      beds: [{ type: "King", count: 2 }],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "Butler Service",
      "Premium Mini Bar",
      "Espresso Machine",
      "Private Dining",
    ],
    pricing: { baseRate: 800, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/premium-photo/3d-rendering-luxury-chinese-bedroom-suite-resort-hotel_105762-1096.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Ultimate luxury presidential suite experience",
    features: [
      "Private terrace",
      "Multiple bedrooms",
      "Full kitchen",
      "Personal butler",
    ],
  },
  {
    id: "villa-suite",
    name: "Villa Suite",
    type: "executive",
    size: { area: 150, unit: "m²" },
    capacity: {
      maxOccupancy: 10,
      beds: [
        { type: "King", count: 2 },
        { type: "Queen", count: 2 },
        { type: "Twin", count: 2 },
      ],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "24/7 Room Service",
      "Premium Mini Bar",
      "Espresso Machine",
      "Private Pool",
      "Concierge Service",
    ],
    pricing: { baseRate: 1200, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/premium-photo/hotel-room-luxury-resort_53876-45479.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Luxurious villa suite with private amenities",
    features: [
      "Private pool",
      "Garden view",
      "Multiple living areas",
      "Full kitchen",
      "Outdoor seating",
    ],
  },
  {
    id: "penthouse-suite",
    name: "Penthouse Suite",
    type: "presidential",
    size: { area: 200, unit: "m²" },
    capacity: {
      maxOccupancy: 12,
      beds: [
        { type: "King", count: 4 },
        { type: "Queen", count: 2 },
      ],
    },
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Bathroom",
      "Smart TV",
      "Butler Service",
      "Premium Mini Bar",
      "Espresso Machine",
      "Private Rooftop Terrace",
      "Concierge Service",
    ],
    pricing: { baseRate: 2500, currency: "USD" },
    availability: true,
    images: [
      "https://img.freepik.com/premium-photo/penthouse-bedroom-night-dark-gloomy-room-with-view-city-from-bed_359013-3756.jpg?uid=R93718308&ga=GA1.1.1699338801.1739848115&w=740",
    ],
    description: "Exclusive penthouse suite with panoramic views",
    features: [
      "Private rooftop terrace",
      "Hot tub",
      "Multiple bedrooms",
      "Full kitchen",
      "Outdoor dining area",
      "Luxury furnishings",
    ],
  },
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