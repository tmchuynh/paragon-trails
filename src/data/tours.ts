// This file now uses API services instead of mock data
// Tours are generated from DummyJSON products via ProductService

export { ProductService } from "@/lib/api/services";

// Re-export the Tour interface for backward compatibility
export type { Tour } from "@/lib/interfaces/services/tours";
export { getMockTours as mockTours_async };

// Transform product data to tours
const transformProductToTour = (product: any): any => ({
  id: `TOUR-${product.id.toString().padStart(3, "0")}`,
  name: `${product.title} Experience`,
  type: ["Cultural", "Adventure", "Historical", "Nature", "City"][
    Math.floor(Math.random() * 5)
  ],
  duration: {
    days: Math.floor(Math.random() * 14) + 1,
    nights: Math.floor(Math.random() * 13) + 1,
  },
  description: `${product.description} Join us for an unforgettable journey that combines culture, adventure, and relaxation in perfect harmony.`,
  images: [product.thumbnail, ...(product.images || [])],
  pricing: {
    adult: Math.floor(product.price * 50),
    child: Math.floor(product.price * 35),
    senior: Math.floor(product.price * 45),
    currency: "USD",
    inclusions: ["Accommodation", "Meals", "Transportation", "Guide"],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "Arrival and Welcome",
      description:
        "Arrive at destination and meet your tour guide. Welcome dinner included.",
      activities: ["Airport transfer", "Hotel check-in", "Welcome dinner"],
      meals: ["Dinner"],
      accommodation: "4-star hotel",
    },
    {
      day: 2,
      title: "City Exploration",
      description: "Full day exploring the main attractions of the city.",
      activities: ["City tour", "Museum visit", "Local market"],
      meals: ["Breakfast", "Lunch"],
      accommodation: "4-star hotel",
    },
  ],
  inclusions: [
    "Professional guide",
    "All transportation",
    "Accommodation",
    "Most meals",
    "Entrance fees",
  ],
  exclusions: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Optional activities",
  ],
  groupSize: {
    min: 4,
    max: Math.floor(Math.random() * 20) + 10,
  },
  difficulty: ["Easy", "Moderate", "Challenging"][
    Math.floor(Math.random() * 3)
  ],
  bestTime: "Year-round",
  languages: ["English", "Spanish", "French"],
  highlights: [
    "Expert local guides",
    "Small group experience",
    "Authentic cultural encounters",
    "Comfortable accommodations",
  ],
  policies: {
    cancellation: "Free cancellation up to 30 days before departure",
    payment: "25% deposit required, balance due 60 days before departure",
    age: "Suitable for all ages",
  },
  rating: product.rating || Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 500) + 50,
  tags: [product.brand, "Popular", "Cultural", "Adventure"],
  destinations: [
    {
      id: Math.floor(Math.random() * 50) + 1,
      name: "Featured Destination",
      daysSpent: Math.floor(Math.random() * 5) + 1,
    },
  ],
  operator: {
    name: "Premium Tours",
    license: "TOUR-LIC-001",
    rating: 4.8,
    yearsInBusiness: Math.floor(Math.random() * 20) + 5,
  },
});

// Legacy export for components that still expect mockTours
export const getMockTours = async () => {
  const { ProductService } = await import("@/lib/api/services");
  const products = await ProductService.getAllProducts();
  return products.map(transformProductToTour);
};

// For components that need a single tour
export const getMockTour = async (id: string) => {
  const tours = await getMockTours();
  return tours.find((tour) => tour.id === id) || null;
};

// Backward compatibility exports
export const mockTours = [];
