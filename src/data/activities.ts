// This file now uses API services instead of mock data
// Activities are generated from DummyJSON products via ProductService

export { ProductService } from "@/lib/api/services";

// Re-export the Activity interface for backward compatibility
export type { Activity } from "@/lib/interfaces/services/activities";
export { getMockActivities as mockActivities_async };

// Transform product data to activities
const transformProductToActivity = (product: any): any => ({
  id: `ACT${product.id.toString().padStart(3, "0")}`,
  name: product.title,
  category: product.category,
  description: product.description,
  images: [product.thumbnail, ...(product.images || [])],
  duration: `${Math.floor(Math.random() * 8) + 1} hours`,
  difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)],
  groupSize: {
    min: Math.floor(Math.random() * 5) + 1,
    max: Math.floor(Math.random() * 50) + 10,
  },
  pricing: {
    adult: Math.floor(product.price * 2),
    child: Math.floor(product.price * 1.5),
    senior: Math.floor(product.price * 1.7),
    currency: "USD",
  },
  location: {
    city: "Various",
    country: "International",
    address: "Location varies by activity",
  },
  schedule: {
    frequency: "Daily",
    times: ["09:00", "13:00", "17:00"],
    seasonality: "Year-round",
  },
  inclusions: ["Activity equipment", "Professional guide", "Safety gear"],
  exclusions: ["Transportation", "Food and beverages", "Personal expenses"],
  requirements: [],
  tags: [product.brand, "Popular", "Adventure"],
  rating: product.rating || Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 500) + 50,
  highlights: [
    "Professional guides",
    "All equipment included",
    "Small group experience",
    "Photo opportunities",
  ],
  cancellationPolicy: "Free cancellation up to 24 hours before",
  languages: ["English", "Spanish", "French"],
  accessibility: Math.random() > 0.5,
  ageRestriction: { min: 5, max: 80 },
  weatherDependent: Math.random() > 0.5,
  destination: {
    id: Math.floor(Math.random() * 50) + 1,
    name: "Various Destinations",
  },
});

// Legacy export for components that still expect mockActivities
export const getMockActivities = async () => {
  const { ProductService } = await import("@/lib/api/services");
  const products = await ProductService.getAllProducts();
  return products.map(transformProductToActivity);
};

// For components that need a single activity
export const getMockActivity = async (id: string) => {
  const activities = await getMockActivities();
  return activities.find((activity) => activity.id === id) || null;
};

// Backward compatibility exports
export const mockActivities = [];
