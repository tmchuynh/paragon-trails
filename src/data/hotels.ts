// This file now uses API services instead of mock data
// Hotels are generated from DummyJSON products via ProductService

export { ProductService } from "@/lib/api/services";

// Re-export the Hotel interface for backward compatibility
export type { Hotel } from "@/lib/interfaces/services/hotels";
export { getMockHotels as mockHotels_async };

// Transform product data to hotels
const transformProductToHotel = (product: any): any => ({
  id: `HOTEL-${product.id.toString().padStart(3, "0")}`,
  name: `${product.title} Hotel`,
  type: "hotel",
  starRating: Math.floor(Math.random() * 3) + 3, // 3-5 stars
  images: [product.thumbnail, ...(product.images || [])],
  description: `${product.description} Experience luxury and comfort in our well-appointed accommodations with modern amenities and exceptional service.`,
  location: {
    address: "Central Location",
    city: "International City",
    country: "Various",
    coordinates: {
      latitude: Math.random() * 180 - 90,
      longitude: Math.random() * 360 - 180,
    },
    nearbyAttractions: [
      "Local Museum",
      "City Center",
      "Shopping District",
      "Historic Quarter",
    ],
  },
  amenities: {
    general: ["Free WiFi", "24/7 Reception", "Concierge", "Luggage Storage"],
    room: [
      "Air Conditioning",
      "Flat-screen TV",
      "Private Bathroom",
      "Mini Bar",
    ],
    recreation: ["Fitness Center", "Swimming Pool", "Spa", "Business Center"],
    dining: [
      "Restaurant",
      "Room Service",
      "Bar/Lounge",
      "Continental Breakfast",
    ],
  },
  rooms: [], // Will be populated separately if needed
  pricing: {
    currency: "USD",
    basePrice: Math.floor(product.price * 10),
    priceRange: {
      min: Math.floor(product.price * 8),
      max: Math.floor(product.price * 15),
    },
    inclusions: ["WiFi", "Breakfast", "Taxes"],
    cancellationPolicy: "Free cancellation up to 24 hours before check-in",
  },
  availability: {
    checkIn: "15:00",
    checkOut: "11:00",
    minimumStay: 1,
    maximumStay: 30,
  },
  policies: {
    petPolicy: Math.random() > 0.5 ? "Pets allowed" : "No pets allowed",
    smokingPolicy: "Non-smoking property",
    childPolicy: "Children welcome",
    cancellation: "Free cancellation up to 24 hours before arrival",
  },
  rating: product.rating || Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 2000) + 100,
  tags: [product.brand, "Popular", "Business", "Leisure"],
  highlights: [
    "Prime location",
    "Excellent service",
    "Modern amenities",
    "Great value",
  ],
  destination: {
    id: Math.floor(Math.random() * 50) + 1,
    name: "International Destination",
  },
});

// Legacy export for components that still expect mockHotels
export const getMockHotels = async () => {
  const { ProductService } = await import("@/lib/api/services");
  const products = await ProductService.getAllProducts();
  return products.map(transformProductToHotel);
};

// For components that need a single hotel
export const getMockHotel = async (id: string) => {
  const hotels = await getMockHotels();
  return hotels.find((hotel) => hotel.id === id) || null;
};

// Backward compatibility exports
export const mockHotels = [];
