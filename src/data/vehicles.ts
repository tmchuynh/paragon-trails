// This file now uses API services instead of mock data
// Vehicles are generated from DummyJSON products via ProductService

export { ProductService } from "@/lib/api/services";

// Re-export the Vehicle interface for backward compatibility
export type { Vehicle } from "@/lib/interfaces/services/vehicles";
export { getMockVehicles as mockVehicles_async };

// Transform product data to vehicles
const transformProductToVehicle = (product: any): any => ({
  id: product.id.toString(),
  name: `${product.title} Vehicle`,
  type: ["Car", "SUV", "Van", "Motorcycle", "Bicycle"][
    Math.floor(Math.random() * 5)
  ],
  category: product.category,
  brand: product.brand,
  model: product.title,
  year: 2020 + Math.floor(Math.random() * 5),
  images: [product.thumbnail, ...(product.images || [])],
  description: `${product.description} Perfect for your travel needs with comfort and reliability.`,
  specifications: {
    engine: ["2.0L", "2.5L", "3.0L", "Electric", "Hybrid"][
      Math.floor(Math.random() * 5)
    ],
    transmission: Math.random() > 0.3 ? "Automatic" : "Manual",
    fuelType: ["Gasoline", "Diesel", "Electric", "Hybrid"][
      Math.floor(Math.random() * 4)
    ],
    seatingCapacity: Math.floor(Math.random() * 6) + 2, // 2-7 seats
    doors: Math.floor(Math.random() * 3) + 2, // 2-4 doors
    luggage: Math.floor(Math.random() * 5) + 1, // 1-5 bags
  },
  features: [
    "Air Conditioning",
    "GPS Navigation",
    "Bluetooth",
    "USB Charging",
    "Power Windows",
    "Central Locking",
  ],
  pricing: {
    daily: Math.floor(product.price * 2),
    weekly: Math.floor(product.price * 12),
    monthly: Math.floor(product.price * 40),
    currency: "USD",
    deposit: Math.floor(product.price * 10),
    insurance: Math.floor(product.price * 0.5),
  },
  availability: {
    locations: ["Airport", "City Center", "Hotel Delivery"],
    pickupTimes: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
    minimumAge: 21,
    licenseRequired: true,
  },
  policies: {
    cancellation: "Free cancellation up to 48 hours before pickup",
    fuel: "Return with same fuel level",
    mileage: "Unlimited mileage included",
    insurance: "Basic insurance included, additional coverage available",
  },
  location: {
    city: "Various Locations",
    country: "International",
    pickup: "Multiple pickup points available",
  },
  rating: product.rating || Math.floor(Math.random() * 2) + 4,
  reviews: Math.floor(Math.random() * 200) + 20,
  tags: [product.brand, "Popular", "Reliable", "Comfortable"],
  supplier: {
    name: "Premium Car Rental",
    license: "CAR-LIC-001",
    rating: 4.5,
    contact: "+1-800-RENTALS",
  },
  restrictions: {
    minimumAge: 21,
    maximumAge: 75,
    licenseType: "Valid driver's license required",
    creditCard: "Credit card required for security deposit",
  },
});

// Legacy export for components that still expect mockVehicles
export const getMockVehicles = async () => {
  const { ProductService } = await import("@/lib/api/services");
  const products = await ProductService.getAllProducts();
  return products.map(transformProductToVehicle);
};

// For components that need a single vehicle
export const getMockVehicle = async (id: string) => {
  const vehicles = await getMockVehicles();
  return vehicles.find((vehicle) => vehicle.id === id) || null;
};

// Backward compatibility exports
export const mockVehicles = [];
