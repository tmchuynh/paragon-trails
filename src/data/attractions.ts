// This file now uses API services instead of mock data
// Attractions are generated from DummyJSON products via ProductService

export { ProductService } from "@/lib/api/services";

// Re-export the Attraction interface for backward compatibility
export type { Attraction } from "@/lib/interfaces/services/attractions";
export { getMockAttractions as mockAttractions_async };

// Transform product data to attractions
const transformProductToAttraction = (product: any): any => ({
  id: `ATT${product.id.toString().padStart(3, "0")}`,
  name: `${product.title} Attraction`,
  type: ["Museum", "Monument", "Park", "Gallery", "Temple", "Castle"][
    Math.floor(Math.random() * 6)
  ],
  category: product.category,
  description: `${product.description} Discover the beauty and significance of this remarkable attraction that captivates visitors from around the world.`,
  images: [product.thumbnail, ...(product.images || [])],
  location: {
    address: "Central Location",
    city: "Tourist City",
    country: "Various Countries",
    coordinates: {
      latitude: Math.random() * 180 - 90,
      longitude: Math.random() * 360 - 180,
    },
    nearbyLandmarks: [
      "City Center",
      "Main Square",
      "Historic District",
      "Shopping Area",
    ],
  },
  operatingHours: {
    monday: { open: "09:00", close: "18:00" },
    tuesday: { open: "09:00", close: "18:00" },
    wednesday: { open: "09:00", close: "18:00" },
    thursday: { open: "09:00", close: "18:00" },
    friday: { open: "09:00", close: "18:00" },
    saturday: { open: "10:00", close: "19:00" },
    sunday: { open: "10:00", close: "17:00" },
    holidays: "Closed on major holidays",
  },
  pricing: {
    adult: Math.floor(product.price * 2),
    child: Math.floor(product.price * 1.2),
    senior: Math.floor(product.price * 1.5),
    student: Math.floor(product.price * 1.3),
    family: Math.floor(product.price * 6),
    currency: "USD",
    freeEntry: Math.random() > 0.8,
  },
  features: [
    "Audio guide available",
    "Gift shop",
    "Café/Restaurant",
    "Wheelchair accessible",
    "Photography allowed",
    "Guided tours",
  ],
  facilities: [
    "Restrooms",
    "Parking",
    "Information desk",
    "Storage lockers",
    "First aid",
  ],
  ratings: {
    overall: product.rating || Math.floor(Math.random() * 2) + 4,
    accessibility: Math.floor(Math.random() * 2) + 4,
    valueForMoney: Math.floor(Math.random() * 2) + 4,
    facilities: Math.floor(Math.random() * 2) + 4,
  },
  reviews: Math.floor(Math.random() * 1000) + 100,
  tags: [product.brand, "Popular", "Historic", "Cultural", "Family-friendly"],
  highlights: [
    "World-renowned attraction",
    "Rich historical significance",
    "Architectural marvel",
    "Cultural importance",
    "Educational experience",
  ],
  bestTimeToVisit: "Year-round",
  estimatedDuration: `${Math.floor(Math.random() * 4) + 1}-${Math.floor(Math.random() * 3) + 2} hours`,
  accessibility: {
    wheelchairAccessible: Math.random() > 0.3,
    audioGuide: Math.random() > 0.4,
    brailleSignage: Math.random() > 0.7,
    guideDogs: true,
  },
  languages: ["English", "Spanish", "French", "German"],
  policies: {
    photography: Math.random() > 0.2 ? "Allowed" : "Restricted areas",
    food: "Not allowed inside",
    smoking: "Prohibited",
    pets: "Service animals only",
  },
  nearbyAttractions: [
    "Historic Center",
    "Local Museum",
    "Shopping District",
    "Scenic Viewpoint",
  ],
  transportation: [
    "Metro/Subway access",
    "Bus routes",
    "Taxi available",
    "Walking distance from center",
  ],
  seasonality: "Open year-round",
  crowdLevel: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
  destination: {
    id: Math.floor(Math.random() * 50) + 1,
    name: "Featured Destination",
  },
});

// Legacy export for components that still expect mockAttractions
export const getMockAttractions = async () => {
  const { ProductService } = await import("@/lib/api/services");
  const products = await ProductService.getAllProducts();
  return products.map(transformProductToAttraction);
};

// For components that need a single attraction
export const getMockAttraction = async (id: string) => {
  const attractions = await getMockAttractions();
  return attractions.find((attraction) => attraction.id === id) || null;
};

// Backward compatibility exports
export const mockAttractions = [];
