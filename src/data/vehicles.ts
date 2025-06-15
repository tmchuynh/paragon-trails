// This file now uses NHTSA Vehicle API for real vehicle data
// Vehicles are fetched from NHTSA VPIC API via NHTSAService

export { nHTSAService } from "@/lib/api/services/nhtsa";

// Re-export the Vehicle interface for backward compatibility
export type { Vehicle } from "@/lib/interfaces/services/vehicles";

// New function to get vehicles from NHTSA API
export const getMockVehicles = async () => {
  const { nHTSAService } = await import("@/lib/api/services/nhtsa");
  
  try {
    // Get vehicles for different types
    const [carMakes, truckMakes, motorcycleMakes, suvMakes] = await Promise.all([
      nHTSAService.getMakesForVehicleType('car'),
      nHTSAService.getMakesForVehicleType('truck'), 
      nHTSAService.getMakesForVehicleType('motorcycle'),
      nHTSAService.getAllMakes().then(makes => makes.slice(0, 20)) // Use some general makes for SUVs
    ]);

    // Transform to our vehicle format
    const cars = nHTSAService.transformMakesToVehicles(carMakes.slice(0, 15), 'car');
    const trucks = nHTSAService.transformMakesToVehicles(truckMakes.slice(0, 10), 'truck');
    const motorcycles = nHTSAService.transformMakesToVehicles(motorcycleMakes.slice(0, 10), 'motorcycle');
    const suvs = nHTSAService.transformMakesToVehicles(suvMakes.slice(0, 15), 'suv');

    return [...cars, ...trucks, ...motorcycles, ...suvs];
  } catch (error) {
    console.error('Error fetching vehicles from NHTSA:', error);
    // Fallback to mock data if API fails
    return getFallbackVehicles();
  }
};

// Fallback vehicles in case NHTSA API is unavailable
const getFallbackVehicles = () => [
  {
    id: "1",
    name: "Toyota Camry",
    type: "car" as const,
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop&q=60",
    ],
    description: "Reliable and fuel-efficient sedan perfect for city driving and long trips.",
    specifications: {
      engine: "2.5L I4",
      transmission: "Automatic",
      fuelType: "Gasoline",
      seatingCapacity: 5,
      doors: 4,
      luggage: 3,
      topSpeed: "130 mph",
      acceleration: "7.3 seconds (0-60 mph)",
      fuelEconomy: "32 mpg",
    },
    features: [
      "Air Conditioning",
      "GPS Navigation", 
      "Bluetooth",
      "USB Charging",
      "Power Windows",
      "Central Locking",
      "Backup Camera",
      "Cruise Control"
    ],
    pricing: {
      daily: 55,
      weekly: 330,
      monthly: 1375,
      currency: "USD",
      deposit: 275,
      insurance: 8,
    },
    availability: {
      locations: ["New York, NY", "Los Angeles, CA", "Chicago, IL"],
      isAvailable: true,
      minimumAge: 18,
      licenseRequired: ["Driver's License"],
    },
    insurance: {
      included: ["Basic Coverage", "Theft Protection"],
      optional: ["Full Coverage", "Roadside Assistance", "Additional Driver"],
    },
    rating: 4.5,
    reviews: 150,
    category: "Economy",
    tags: ["rental", "travel", "economy", "city", "fuel-efficient"],
  },
  {
    id: "2",
    name: "Ford F-150",
    type: "truck" as const,
    brand: "Ford",
    model: "F-150",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format&fit=crop&q=60",
    ],
    description: "America's best-selling truck, perfect for work and adventure.",
    specifications: {
      engine: "3.5L V6",
      transmission: "Automatic",
      fuelType: "Gasoline",
      seatingCapacity: 5,
      doors: 4,
      luggage: 5,
      topSpeed: "110 mph",
      acceleration: "6.1 seconds (0-60 mph)",
      fuelEconomy: "22 mpg",
    },
    features: [
      "Air Conditioning",
      "GPS Navigation",
      "Bluetooth",
      "USB Charging",
      "Towing Package",
      "4WD",
      "Bed Liner"
    ],
    pricing: {
      daily: 85,
      weekly: 510,
      monthly: 2125,
      currency: "USD",
      deposit: 425,
      insurance: 12,
    },
    availability: {
      locations: ["Houston, TX", "Denver, CO", "Phoenix, AZ"],
      isAvailable: true,
      minimumAge: 21,
      licenseRequired: ["Driver's License"],
    },
    insurance: {
      included: ["Basic Coverage", "Theft Protection"],
      optional: ["Full Coverage", "Roadside Assistance", "Additional Driver"],
    },
    rating: 4.3,
    reviews: 89,
    category: "Commercial",
    tags: ["rental", "travel", "commercial", "heavy-duty", "work"],
  }
];

// Legacy export for components that still expect mockVehicles
export const mockVehicles = [];

// For components that need a single vehicle
export const getMockVehicle = async (id: string) => {
  const vehicles = await getMockVehicles();
  return vehicles.find(vehicle => vehicle.id === id);
};
